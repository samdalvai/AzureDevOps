# Configure the Azure provider
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 2.65"
    }
  }

  required_version = ">= 0.14.9"

  backend "remote" {
    organization = "concerthub"
    workspaces {
      name = "concerthub-workspace"
    }
  }
}

provider "azurerm" {
  features {}
}

# Create resource group
resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = var.location

  # ensures that the resource is recreated before destruction
  lifecycle {
    create_before_destroy = true
  }
}

# Deploy multi-container App
module "web_app_container" {
  depends_on = [
    azurerm_resource_group.rg
  ]

  source = "innovationnorway/web-app-container/azurerm"

  resource_group_name = azurerm_resource_group.rg.name
  plan = {
    name     = var.app_service_plan_name
    sku_size = "F1"
  }

  name = var.web_app_container_name

  app_settings = {
    DOCKER_ENABLE_CI = "true"
  }
  
  start_time_limit = 600

  container_type = "compose"

  container_config = file("docker-compose.yml")
}