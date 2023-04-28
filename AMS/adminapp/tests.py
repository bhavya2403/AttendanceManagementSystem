from django.test import TestCase, Client
from random import randint

class TestFaculty(TestCase):
    def setUp(self):
        self.client = Client()
        self.header = {'HTTP_TOKEN': 'pbkdf2_sha256$320000$zYT1PfOLGbt9tyqL9WZCsA$qG8Ny30yLtPNcEv7rB8j4zf7OwmwzWwzV4/2JxGGtpc='}

    def test_register_user(self):
        id = randint(1, 1000000000)
        response = self.client.post('/admin/register_user/', {'id': id, 'role': 'student', 'password': '1234'},
                                    **self.header)
        self.assertEqual(response.status_code, 200)
        response = self.client.post('/admin/register_user/', {'id': id, 'role': 'student', 'password': 'hello'},
                                    **self.header)
        self.assertEqual(response.status_code, 409)

    def test_register_user_412(self):
        response = self.client.post('/admin/register_user/', {'id': 13451234}, **self.header)
        self.assertEqual(response.status_code, 412)

    def test_register_user_406(self):
        response = self.client.post('/admin/register_user/', {'id': 13451234, 'role': '2973'}, **self.header)
        self.assertEqual(response.status_code, 406)