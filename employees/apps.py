from django.apps import AppConfig


class EmployeesConfig(AppConfig):
    name = 'employees'
    def ready(self):
        import users.signals