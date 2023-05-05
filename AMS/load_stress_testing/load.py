from django.test import TestCase, Client
from authorization.views import *

class LoadStress(TestCase):
    def setUp(self):
        self.client = Client()
        self.token2 = 'pbkdf2_sha256$320000$2PGijHfWJVFNxLjhs024nF$x2AUg4MOE7UGjDVPdJwFV6oK06TGhuw0xlFeRmVvmuE='
        self.header = {"HTTP_TOKEN": self.token2}

    def test_stress(self):
        count = 0
        while True:
            self.client.post('/leavemanage/get_leaves/', **self.header)
            count += 1
            if not count%10:
                print(count)

    def test_load(self):
        usr = list(COLL_USR.find())
        i = 0
        n = len(usr)
        count = 0
        while True:
            token = usr[i].get('password')
            self.header = {"HTTP_TOKEN": token}
            self.client.post('/leavemanage/get_leaves/', **self.header)
            count += 1
            i = (i+1)%n
            if not count%10:
                print(count)
