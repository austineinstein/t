from setuptools import setup, find_packages
from setuptools.command.install import install
import subprocess
import json
import os

class PostInstallCommand(install):
    """Post-installation command to install pnpm packages."""
    def run(self):
        # First run the standard install
        install.run(self)
        
        # Check if package.json exists
        if os.path.exists('package.json'):
            try:
                # First ensure pnpm is installed globally
                subprocess.check_call(['npm', 'install', '-g', 'pnpm'])
                # Run pnpm install
                subprocess.check_call(['pnpm', 'install'])
            except subprocess.CalledProcessError as e:
                print(f"Failed to install pnpm packages: {e}")
            except FileNotFoundError:
                print("npm/pnpm not found. Please install Node.js first.")

setup(
    name="thou",
    version="0.1.0",
    packages=find_packages(),
    cmdclass={
        'install': PostInstallCommand,
    }, 
    # Add other setup configurations as needed
)



