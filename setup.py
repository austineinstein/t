from setuptools import setup, find_packages
from setuptools.command.install import install
import subprocess
import shutil
import sys
import os

class PostInstallCommand(install):
    """Custom install command to build frontend using Bun."""
    def run(self):
        install.run(self)
        # Ensure Bun availability
        if not shutil.which("bun"):
            print("Bun is not installed. Installing via npm..")
            try:
                subprocess.check_call(["npm", "install", "-g", "bun"])
            except subprocess.CalledProcessError as e:
                print(f"Failed to install Bun: {e}")
                sys.exit(1)

        # Ensure app route exists
        if not os.path.exists("src/app/index.tsx"):
            print("Missing src/app/index.tsx // Skipping bun build.")
            return 
        # Run build command
        try: 
            print("Running: bun build src/app/index.tsx --outfit=dist/bundle.js")
            subprocess.check_call([
                "bun", "build", "src/app/index.tsx", "--outfile=dist/bundle.js"
            ])
        except subprocess.CalledProcessError as e:
            print(f"Bun build failed: {e}")
            sys.exit(1)

setup(
    name="thou",
    version="0.1.0",
    description="Packages you need",
    packages=find_packages(),
    include_package_data=True,
    cmdclass={
        'install': PostInstallCommand,
    },
    classifiers=[
        "Programming Language :: Python :: 3",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.8",
)
