from django.db import models

# Create your models here.

class Prospect(models.Model):
	mail = models.EmailField(unique = True)

	def __unicode__(self):
		return self.mail
