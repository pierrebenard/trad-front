from flask import Blueprint, jsonify
from pymongo import MongoClient
from bson import ObjectId
from datetime import datetime, timedelta
import json

semaineEnCours = Blueprint('semaineEnCours', __name__)

@semaineEnCours.route('/semaineencours', methods=['GET'])
def get_data_by_week():
    # Connexion à la base de données MongoDB
    client = MongoClient('mongodb+srv://pierre:ztxiGZypi6BGDMSY@atlascluster.sbpp5xm.mongodb.net/?retryWrites=true&w=majority')
    db = client['test']
    collection = db['testDate']

    # Récupération de la date actuelle
    current_date = datetime.now()

    # Calcul du début de la semaine actuelle (lundi)
    start_date = current_date - timedelta(days=current_date.weekday())

    # Calcul de la fin de la semaine actuelle (dimanche)
    end_date = start_date + timedelta(days=6)

    # Requête pour récupérer les données dans la plage de dates spécifiée
    query = {
        "date": {
            "$gte": start_date,
            "$lte": end_date
        }
    }
    data = list(collection.find(query))

    # Fermeture de la connexion à la base de données
    client.close()

    # Fonction de conversion personnalisée pour les objets ObjectId et datetime
    def serialize_object(obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        elif isinstance(obj, datetime):
            return obj.isoformat()
        raise TypeError(f"Object of type {type(obj).__name__} is not JSON serializable")

    # Retourne les données au format JSON en utilisant la conversion personnalisée
    return jsonify(json.loads(json.dumps(data, default=serialize_object)))
