import os
import shutil
import subprocess
import datetime
import pytz
import platform
from dotenv import load_dotenv
# from pexpect import pxssh

timezone = pytz.timezone("America/Recife")
load_dotenv()

# prod vars
dir__prod = "./dist/"
time__str = timezone.localize(
    datetime.datetime.now()).strftime('%d/%m/%Y %H:%M')
commit__str = "git commit -m \"[production] | {0}\"".format(time__str)

# ssh vars
# ssh_user = os.getenv('SSH_USER')
# ssh_ip = os.getenv('SSH_IP')
# ssh_pass = os.getenv('SSH_PASSWORD')
# ssh__str = "ssh {0}@{1}".format(ssh_user, ssh_ip)

# if platform.system() == "Linux":
#     ssh__str = "sudo {0}".format(ssh__str)

# clean prod folder
if os.path.isdir(dir__prod):
    shutil.rmtree(dir__prod)

subprocess.call('git pull origin production', shell=True)
subprocess.call('git pull origin master', shell=True)
subprocess.call('npm i', shell=True)


# run build prod
# subprocess.call('ng build --prod', shell=True)
subprocess.call('ng build', shell=True)

# up files to git
subprocess.call('git add .', shell=True)
subprocess.call(commit__str, shell=True)
subprocess.call('git push origin production', shell=True)


# s = pxssh.pxssh()
# if not s.login(ssh_ip, ssh_user, ssh_pass):
#     print("SSH session failed on login.")
#     print(str(s))
# else:
#     print("SSH session login successful")
#     s.sendline ('uptime')
#     s.prompt()         # match the prompt
#     print(s.before)     # print everything before the prompt.
#     s.logout()

# #We can also execute multiple command like this:
# s.sendline ('uptime;df -h')
