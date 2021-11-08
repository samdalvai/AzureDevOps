# Configure the Azure provider
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 2.65"
    }
  }

  required_version = ">= 0.14.9"
}

provider "azurerm" {
  features {}
}

# Create resource group
resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = var.location
}

# Deploy multi-container App
module "web_app_container" {
  depends_on = [
    azurerm_resource_group.rg
  ]

  source = "innovationnorway/web-app-container/azurerm"

  resource_group_name = azurerm_resource_group.rg.name
  plan = {
    name = var.app_service_plan_name
    sku_size = "S1"
  }

  name = var.web_app_container_name

  container_type = "compose"

  container_config = file("docker-compose.yml")
}