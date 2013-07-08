Beta-invitation
===============

## Beta Invitation App - Training purposes


### Installing environement

1. Download and install HomeBrew, a Mac package manager http://mxcl.github.io/homebrew/
2. Open terminal and execute : ```brew update```
3. Install Git : ```brew install git```
4. Pyton is shipped by default with Mac OSX, if not : ```brew install python --framework```
5. Install pip (Python package manager): ```sudo easy_install pip```
6. Install virtualenv : ```pip install virtualenv``` and ```pip install virtualenvwrapper```
7. Clone this repo on your local machine : ```git clone git@github.com:Boussadia/beta-invitation.git```
8. cd into the project  and create a virtual environnement :
   ```virtualenv venv```.
   Then activate the virtual environnement : ```vevnv/bin/activate```.
   In order to exit this environement : ```deactivate```
9. Install pip requirements for this project : ```pip install -r requirements.txt```
10. Synchronize database (using a sqlite3 database) : ```python
	manage.py syncdb```
11. Migrating with south : ```python manage.py migrate invitations```

### Api Endpoints

Getting all prospects :
	GET /api/prospects/

Getting a specific prospect :
	GET /api/prospects/(id_prospect)

Create new prospect :
	POST /api/prospects/
	query parameters : 'mail', email of new prospect 

Updating prospect :
	POST /api/prospects/(id_prospect)
	this action will send email to prospect inviting him to the beta
	version of the service
