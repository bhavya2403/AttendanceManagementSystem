from django.test import TestCase, Client
from authorization.views import COLL_USR

# Create your tests here.
class TestAuth(TestCase):
    def setUp(self):
        self.client = Client()

    def test_index(self):
        response = self.client.get('/auth/')
        self.assertEqual(response.status_code, 200)

    def test_register(self):
        response = self.client.post('/auth/register/', {'email': 'nikhil_1234@gmail.com',
                        'password': 'rohnikhilt2002',
                        'role': 'admin',
                        'create_mail': 'bhavyasdcvdrtx@gmail.com',
                        'create_password': 'noqwaedrqwtBhavya',
                        'create_role': 'student'})
        self.assertEqual(response.status_code, 200)
        COLL_USR.delete_one({'email': 'bhavyasdcvdrtx@gmail.com', 'role': 'student'})

    def test_register_fail(self):
        response = self.client.post('/auth/register/', {'email': 'nikhil_1234@gmail.com',
                        'password': 'rohnikhilt2002',
                        'role': 'admin',
                        'create_mail': 'bhavya@gmail.com',
                        'create_password': 'notBhavya',
                        'create_role': 'student'})
        self.assertEqual(response.status_code, 409) # conflict

    def test_login(self):
        response = self.client.get('/auth/login/', {'id': 's202001095', 'password': 'mkwrngwmnrg',
                                                'role': 'student'})
        self.assertEqual(response.status_code, 200)

    def test_login_fail(self):
        response = self.client.post('/auth/login/', {'email': 'abcd@gmail.com', 'password': 'efgh',
                                                'role': 'admin'})
        self.assertEqual(response.status_code, 401)