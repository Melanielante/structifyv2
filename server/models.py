from flask_sqlalchemy import   SQLAlchemy
from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()

class Customer(db.Model, SerializerMixin):
    __tablename__  = 'customers'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False, unique=True)
    passport = db.Column(db.Integer, unique= True)

    def __repr__(self):
        return f'< Customer: {self.first_name}, {self.last_name}, {self.email}, {self.passport}, {self.password}'