from django.db import models
from passlib.hash import pbkdf2_sha256

# Create your models here.
class User(models.Model):
    Nome = models.CharField(max_length=120,blank=True)
    Email = models.EmailField(blank=True)
    Senha = models.CharField(max_length=256)

    def verify_password(self, rawPassword):
        return pbkdf2_sha256.verify(rawPassword, self.Senha)