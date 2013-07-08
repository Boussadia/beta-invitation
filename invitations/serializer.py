from rest_framework import serializers
from invitations.models import Prospect

class ProspectSerializer(serializers.ModelSerializer):
	class Meta:
		model = Prospect
