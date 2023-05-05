from locust import HttpUser, task

class ListPostUser(HttpUser):
    @task
    def test_login_faculty(self):
        self.client.post('/auth/login/', {'id': '2019748548', 'password': 'fbfjnnjn',
                                        'role': 'instructor'})
