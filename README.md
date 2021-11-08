# Project for the System Engineering course 2021/22

* [Application description](#application-description)
* [Instructions](#instructions)
* [Author](#author)

<br>

# Application description

This web application....

<br>

# Instructions
## Creation of the Docker images

* This application is deployed using three Docker containers, one for the php web application, one for the mysql database and one for the python scheduled jobs.
* In order to tun the application locally you need Docker installed on your machine.
* Run the Docker application.
* From inside the `root/` folder of the project run the following command to create the docker images and run them: `docker-compose up -d` (you can omit -d if you do not want to run it in detached mode)
* Open a web browser and access [localhost, port 8080](http://localhost:8080) to run the application.
* In order to stop execution of the docker containers, run the command `docker-compose down`

## Pushing docker images to DockerHub

* For the next step you need to push the three Docker images to Dockerhub, to do so you need first to change the image name `samdalvai/`  in the `docker-compose` file to your DockerHub username. Alternatively you can use the three latest images in the `samdalvai` DockerHub repository.
* Run the command `docker-compose build` to build the images
* Run the command `docker-compose` push to push the three images to your DockerHub repository.
* You can skip the last three instructions if you decide to use the latest versions of the `samdalvai/` images.

## Deploying the application on remote

This application is deployed using [Microsoft Azure](https://azure.microsoft.com/en-us/) cloud service provider.
### Deployment on Microsoft Azure with az cli
* First of all you need a Microsoft Azure Account
* Next you need to download the latest **azure-cli** command line tool
* Log in to your Azure account by using the command `az login`, you will be redirected to the web browser where you will need to provide your Azure credential
* Now you can create all the infrastructure for the app.
* Run `az group create --name myResourceGroup --location "North Europe"` to create the resource group.
* Run `az appservice plan create --name myAppServicePlan --resource-group myResourceGroup --sku S1 --is-linux` to create an App service plan in the Standard pricing tier.
* At this step if you pushed your own docker images to DockerHub you need to set the image name in the `azure-docker-compose.yml` file. Run `az webapp create --resource-group myResourceGroup --plan myAppServicePlan --name <app-name> --multicontainer-config-type compose --multicontainer-config-file azure-docker-compose.yml` from the `root/` folder of the project to create the App with a name of your choice.
* Access the app in your browser at: `http://<app-name>.azurewebsites.net`.
* Access the logs of your app at: `https://<app-name>.scm.azurewebsites.net/api/logs/docker`.
* Run `az group delete --name myResourceGroup` to delete the resource group along with the service plan and the app.

### Deployment on Microsoft Azure with Terraform

* First of all you need to install the [Terraform client](https://learn.hashicorp.com/tutorials/terraform/install-cli?in=terraform/azure-get-started) on your machine.
* For the next step you need to have completed the first 3 steps of the instructions described in the previous paragraph: [Deployment with az cli](#deployment-on-microsoft-azure-with-az-cli)
* You can set the name of the resource group, the location, the app service plan and the app service in the `variables.tf` file.
* From the `root/` folder of the project run `terraform initi` to initialize the provider plugins.
* Run `terraform validate` to validate the `main.tf` file.
* Run `terraform apply` to build the infrastructure, type `yes` when requested to do so.
* After some minutes the infrastructure on Azure will be online and you will be able to access the application as decribed in the last steps of the previous paragraph:  [Deployment with az cli](#deployment-on-microsoft-azure-with-az-cli)
* Run `terraform destroy` and type `yes` when required to destroy all the infrastructure.

<br>

# Author
**Name**: Samuel Dalvai <br>
**Student Id**: 17682 <br>
**Email**: samdalvai@unibz.it <br>
