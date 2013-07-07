from django.db import models

# Create your models here.

class Prospect(models.Model):
	mail = models.EmailField(unique = True)
	is_invited = models.BooleanField(default = False)

	def __unicode__(self):
		if self.is_invited:
			return '%s was invited'%(self.mail)
		else:
			return '%s was not invited yet'%(self.mail)

