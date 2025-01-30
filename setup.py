from setuptools import setup, find_packages
from setuptools.command.install import install
import subprocess

class InstallNodePackage(install):
    """Custom installation class to ensure pnpm is used for setup."""

    def run(self):
        # Check if pnpm is installed
        try:
            subprocess.run(["pnpm", "--version"], check=True)
        except FileNotFoundError:
            raise RuntimeError("pnpm is required but not found! Install it via: npm install -g pnpm")

        # Install dependencies and build the project
        subprocess.run(["pnpm", "install"], check=True)
        subprocess.run(["pnpm", "build"], check=True)

        install.run(self)

setup(
    name="my_node_ts_module",
    version="0.1.0",
    description="A Python wrapper for a Node.js/TypeScript module using pnpm",
    packages=find_packages(),
    include_package_data=True,
    install_requires=["PyExecJS"],
    cmdclass={"install": InstallNodePackage},
    entry_points={
        "console_scripts": [
            "my_module_cli=my_module.cli:main",
        ]
    },
)
