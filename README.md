# IOTravelCostsBundle

## Overview
The IOTravelCostsBundle implements a calculator for travel costs, based on customizable tariffs. 
The tariff structure can be edited in the backend and can depend on the current time, e.g. you can have different
tariffs for different times of the day or different days of the week. 

__Features include:__
* Customizable tariff structure for different days
* Frontend module to specify your desired start and end location
* Uses con4gis.io servers for the calculations (addresses, lengths, prices,..)

## Installation
Via composer:
```
composer require con4gis/io-travel-costs
```
Alternatively, you can use the Contao Manager to install the con4gis-IOTravelCosts.

## Requirements
- [Contao](https://github.com/contao/core-bundle) (***4.9.x LTS*** or latest stable release)
- [MapsBundle](https://github.com/Kuestenschmiede/MapsBundle/releases) (*latest stable release*)

## Documentation
Visit [docs.con4gis.org](https://docs.con4gis.org) for a user documentation. You can also contact us via the support forum there.