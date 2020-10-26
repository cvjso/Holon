from Users.models import *

from passlib.hash import pbkdf2_sha256

def EncryptPassword(password):
    userPassword = password
    userPassword = pbkdf2_sha256.encrypt(userPassword, rounds=12000, salt_size=32)
    password = userPassword
    return password

def CreateUser(data):
    data["Senha"] = EncryptPassword(data["Senha"])
    user = User(**data)
    user.save()

def FindUser(data):
    return User.objects.filter(**data).first()

def RemoveUser(data):
    # data["Senha"] = EncryptPassword(data["Senha"])
    if AuthUser(data):
        del data["Senha"]
        user = FindUser(data)
        user.delete()

def ReplacePassword(data):
    password = data["Senha"]
    del data["Senha"]
    user = FindUser(data)
    if user.verify_password(password):
        return user.Senha

def AuthUser(data):
    password = data["Senha"]
    del data["Senha"]
    user = FindUser(data)
    return user.verify_password(password)