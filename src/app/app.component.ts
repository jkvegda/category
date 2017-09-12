import {Http, Response} from '@angular/http';
import { Component } from '@angular/core';
import { SearchFilterPipe } from './search-filter-pipe.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Category List and Search';
  result = [
   {
      "id":389,
      "name":"Recipe Category",
      "shortName":"Root From MMS_Category",
      "open":true,
      "hasSmarTagChild":false,
      "displayOrder":9,
      "children":[
         {
            "id":394,
            "childName":"Accompany",
            "childOpen":true,
            "children":[
               {
                  "id":817,
                  "childName":"Beverage Cold"
               },
               {
                  "id":818,
                  "childName":"Beverage Hot"
               },
               {
                  "id":828,
                  "childName":"Bread/Roll/Cracker"
               },
               {
                  "id":5901,
                  "childName":"Candies"
               },
               {
                  "id":504,
                  "childName":"Condiments"
               },
               {
                  "id":835,
                  "childName":"Garnish"
               },
               {
                  "id":506,
                  "childName":"Salad Dressings"
               },
               {
                  "id":832,
                  "childName":"Snacks/Appetizers"
               },
               {
                  "id":507,
                  "childName":"Spreads/Dips/Salsas"
               }
            ]
         },
         {
            "id":408,
            "childName":"Breakfast ",
            "childOpen":true,
            "children":[
               {
                  "id":824,
                  "childName":"Bacon/Ham/Sausage"
               },
               {
                  "id":823,
                  "childName":"Bread/Muffin"
               },
               {
                  "id":826,
                  "childName":"Cereal Cold"
               },
               {
                  "id":827,
                  "childName":"Cereal Hot"
               },
               {
                  "id":528,
                  "childName":"Egg"
               },
               {
                  "id":529,
                  "childName":"French Toast/Pancake/Waffle"
               },
               {
                  "id":530,
                  "childName":"Other Breakfast Entree"
               },
               {
                  "id":825,
                  "childName":"Sandwich/Wrap"
               }
            ]
         },
         {
            "id":419,
            "childName":"Desserts",
            "childOpen":true,
            "children":[
               {
                  "id":544,
                  "childName":"Cakes/Cupcakes"
               },
               {
                  "id":545,
                  "childName":"Cobbler/Crisp"
               },
               {
                  "id":546,
                  "childName":"Cookie/Bar"
               },
               {
                  "id":550,
                  "childName":"Dessert Icing/Filling/Sauce"
               },
               {
                  "id":549,
                  "childName":"Fruit Desserts"
               },
               {
                  "id":750,
                  "childName":"No Added Sugar Desserts"
               },
               {
                  "id":551,
                  "childName":"Other Desserts"
               },
               {
                  "id":553,
                  "childName":"Pie/Pastry/Tart"
               },
               {
                  "id":554,
                  "childName":"Pudding/Parfait/Frozen"
               }
            ]
         },
         {
            "id":5916,
            "childName":"Deep Fried Food",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":430,
            "childName":"Fruit",
            "childOpen":true,
            "children":[
               {
                  "id":555,
                  "childName":"Fruit"
               }
            ]
         },
         {
            "id":444,
            "childName":"Main Entree",
            "childOpen":true,
            "children":[
               {
                  "id":557,
                  "childName":"Beef Entree"
               },
               {
                  "id":813,
                  "childName":"Casserole/Chili/Stew"
               },
               {
                  "id":558,
                  "childName":"Chicken Entree"
               },
               {
                  "id":559,
                  "childName":"Fish Entree"
               },
               {
                  "id":569,
                  "childName":"Fish Shellfish Entree"
               },
               {
                  "id":561,
                  "childName":"Lamb/Veal Entree"
               },
               {
                  "id":563,
                  "childName":"Pizza/Calzone/Flatbread"
               },
               {
                  "id":564,
                  "childName":"Pork Entree"
               },
               {
                  "id":566,
                  "childName":"Salad Entree"
               },
               {
                  "id":5330,
                  "childName":"Poultry Other"
               },
               {
                  "id":567,
                  "childName":"Sandwich Cold"
               },
               {
                  "id":568,
                  "childName":"Sandwich Hot"
               },
               {
                  "id":570,
                  "childName":"Turkey Entree"
               },
               {
                  "id":562,
                  "childName":"Vegetarian Entree"
               }
            ]
         },
         {
            "id":463,
            "childName":"Sauce/Gravy/Marinade",
            "childOpen":true,
            "children":[
               {
                  "id":833,
                  "childName":"Marinade/Spice/Mix"
               },
               {
                  "id":574,
                  "childName":"Sauce/Gravy"
               }
            ]
         },
         {
            "id":466,
            "childName":"Side Salad",
            "childOpen":true,
            "children":[
               {
                  "id":575,
                  "childName":"Gelatin"
               },
               {
                  "id":576,
                  "childName":"Side Salad"
               }
            ]
         },
         {
            "id":468,
            "childName":"Soup",
            "childOpen":true,
            "children":[
               {
                  "id":578,
                  "childName":"Soup, Broth Base "
               },
               {
                  "id":579,
                  "childName":"Soup, Cream Base "
               }
            ]
         },
         {
            "id":472,
            "childName":"Starch/Grain",
            "childOpen":true,
            "children":[
               {
                  "id":585,
                  "childName":"Grain"
               },
               {
                  "id":584,
                  "childName":"Pasta"
               },
               {
                  "id":588,
                  "childName":"Rice"
               },
               {
                  "id":840,
                  "childName":"Stuffing/Misc"
               }
            ]
         },
         {
            "id":474,
            "childName":"Vegetable",
            "childOpen":true,
            "children":[
               {
                  "id":838,
                  "childName":"Corn"
               },
               {
                  "id":839,
                  "childName":"Legume"
               },
               {
                  "id":593,
                  "childName":"Other Vegetable"
               },
               {
                  "id":837,
                  "childName":"Potato"
               }
            ]
         },
         {
            "id":478,
            "childName":"Yogurt",
            "childOpen":true,
            "children":[
               {
                  "id":594,
                  "childName":"Yogurt"
               }
            ]
         }
      ]
   },
   {
      "id":390,
      "name":"Recipe Production Area",
      "shortName":"Root From MMS_Category",
      "open":true,
      "hasSmarTagChild":false,
      "displayOrder":10,
      "children":[
         {
            "id":696,
            "childName":"Assembly Staging",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":697,
            "childName":"Assembly Trayline",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":699,
            "childName":"Bakery",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":698,
            "childName":"Cold Prep",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":700,
            "childName":"Hot Entree",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":701,
            "childName":"Hot Side",
            "childOpen":true,
            "children":[

            ]
         }
      ]
   },
   {
      "id":391,
      "name":"Recipe Source",
      "shortName":"Root From MMS_Category",
      "open":true,
      "hasSmarTagChild":false,
      "displayOrder":11,
      "children":[
         {
            "id":728,
            "childName":"*Chartwells Higher Ed",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":796,
            "childName":"Chartwells Higher Ed Retail",
            "childOpen":true,
            "children":[
               {
                  "id":6093,
                  "childName":"RIC Winners"
               }
            ]
         },
         {
            "id":745,
            "childName":"*Thompson Hospitality",
            "childOpen":true,
            "children":[
               {
                  "id":5307,
                  "childName":"Restaurants"
               },
               {
                  "id":746,
                  "childName":"Austin Grill"
               }
            ]
         },
         {
            "id":806,
            "childName":"Chartwells-Resident Concepts",
            "childOpen":true,
            "children":[
               {
                  "id":760,
                  "childName":"Grill Nation/BYOB"
               },
               {
                  "id":6033,
                  "childName":"Core 80"
               },
               {
                  "id":6067,
                  "childName":"Core Menu $2.00"
               },
               {
                  "id":6076,
                  "childName":"Core Menu $2.50"
               },
               {
                  "id":751,
                  "childName":"Compass-Mondo Subs"
               }
            ]
         },
         {
            "id":6075,
            "childName":"**Exclude for FIT",
            "childOpen":true,
            "children":[

            ]
         }
      ]
   },
   {
      "id":900,
      "name":"Recipe Source Canada",
      "open":true,
      "hasSmarTagChild":false,
      "displayOrder":13,
      "children":[

      ]
   },
   {
      "id":810,
      "name":"Station",
      "open":true,
      "hasSmarTagChild":false,
      "displayOrder":14,
      "children":[
         {
            "id":5258,
            "childName":"Asian/Sushi",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5279,
            "childName":"American",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5941,
            "childName":"African",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":863,
            "childName":"American",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5259,
            "childName":"Beverages",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5278,
            "childName":"Asian/Sushi",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":866,
            "childName":"Asian",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5260,
            "childName":"Breakfast",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5280,
            "childName":"Breakfast",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":1043,
            "childName":"Barbecue",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5261,
            "childName":"Catering",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5281,
            "childName":"Desserts",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5262,
            "childName":"Deli",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5282,
            "childName":"Deli",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5951,
            "childName":"Beverage",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":865,
            "childName":"Breakfast",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5263,
            "childName":"Desserts",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5283,
            "childName":"Grill",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5264,
            "childName":"Grab and Go",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5284,
            "childName":"Indian",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5942,
            "childName":"Caribbean",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":800,
            "childName":"Mangos",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":811,
            "childName":"Deli",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5265,
            "childName":"Grill",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5266,
            "childName":"G8",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5285,
            "childName":"Mediterranean",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5943,
            "childName":"French",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5267,
            "childName":"Homestyle/Comfort",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5277,
            "childName":"Miami Wellness",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5944,
            "childName":"German",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":854,
            "childName":"Grill",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5268,
            "childName":"Indian",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5286,
            "childName":"Mexican/Latin",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5269,
            "childName":"Mediterranean",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5287,
            "childName":"Pasta/Italian",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5981,
            "childName":"Flatbread",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5276,
            "childName":"Mexican/Latin",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5288,
            "childName":"Pizza/Flatbreads/Calzones",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5945,
            "childName":"Hawaiian",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5271,
            "childName":"Pizza/Flatbreads/Calzones",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5291,
            "childName":"Salad Bar",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5946,
            "childName":"Hispanic",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":1048,
            "childName":"Indian",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5272,
            "childName":"Pasta/Italian",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5289,
            "childName":"Salads (Composed)",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":804,
            "childName":"Sebastians",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":851,
            "childName":"Avoiding Gluten?",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5592,
            "childName":"LTOs",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5947,
            "childName":"Irish",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5290,
            "childName":"Soups",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5292,
            "childName":"Soup/Chili/Stew",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5948,
            "childName":"Japanese",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":853,
            "childName":"Latin",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5591,
            "childName":"LTOs",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5949,
            "childName":"Middle Eastern",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5152,
            "childName":"Noodle Revolution",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":812,
            "childName":"Salad",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5979,
            "childName":"Side",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5980,
            "childName":"Skillet",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5975,
            "childName":"Chinese",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5952,
            "childName":"Tartine",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5976,
            "childName":"Greek",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5950,
            "childName":"Thai",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5977,
            "childName":"Entree",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":5978,
            "childName":"Dessert",
            "childOpen":true,
            "children":[

            ]
         }
      ]
   },
   {
      "id":1003,
      "name":"Webtrition Export ",
      "open":true,
      "hasSmarTagChild":false,
      "displayOrder":16,
      "children":[
         {
            "id":1030,
            "childName":"Avenue C",
            "childOpen":true,
            "children":[
               {
                  "id":1031,
                  "childName":"MyFitnessPal"
               }
            ]
         },
         {
            "id":1020,
            "childName":"Bon Appetit",
            "childOpen":true,
            "children":[
               {
                  "id":1021,
                  "childName":"Webservice"
               }
            ]
         },
         {
            "id":1028,
            "childName":"Canteen",
            "childOpen":true,
            "children":[
               {
                  "id":1029,
                  "childName":"MyFitnessPal"
               }
            ]
         },
         {
            "id":1007,
            "childName":"Chartwells Higher Ed",
            "childOpen":true,
            "children":[
               {
                  "id":1008,
                  "childName":"MyFitnessPal"
               }
            ]
         },
         {
            "id":1045,
            "childName":"Chartwells Higher Ed - UADS",
            "childOpen":true,
            "children":[
               {
                  "id":1046,
                  "childName":"MyFitnessPal"
               }
            ]
         },
         {
            "id":1005,
            "childName":"Eurest",
            "childOpen":true,
            "children":[
               {
                  "id":1009,
                  "childName":"MyFitnessPal"
               }
            ]
         },
         {
            "id":1006,
            "childName":"Flik",
            "childOpen":true,
            "children":[
               {
                  "id":1010,
                  "childName":"MyFitnessPal"
               }
            ]
         },
         {
            "id":5438,
            "childName":"Canada ESS",
            "childOpen":true,
            "children":[
               {
                  "id":5440,
                  "childName":"MyFitnessPal"
               }
            ]
         },
         {
            "id":1203,
            "childName":"Levy",
            "childOpen":true,
            "children":[
               {
                  "id":1204,
                  "childName":"MyFitnessPal"
               }
            ]
         },
         {
            "id":5618,
            "childName":"ESS",
            "childOpen":true,
            "children":[
               {
                  "id":5621,
                  "childName":"MyFitnessPal"
               }
            ]
         },
         {
            "id":1004,
            "childName":"Morrison",
            "childOpen":true,
            "children":[
               {
                  "id":1011,
                  "childName":"MyFitnessPal"
               }
            ]
         },
         {
            "id":5641,
            "childName":"Chartwells K12",
            "childOpen":true,
            "children":[
               {
                  "id":5642,
                  "childName":"MyFitnessPal"
               }
            ]
         },
         {
            "id":1026,
            "childName":"RA",
            "childOpen":true,
            "children":[
               {
                  "id":1027,
                  "childName":"MyFitnessPal"
               }
            ]
         },
         {
            "id":6077,
            "childName":"Canada Eurest",
            "childOpen":true,
            "children":[
               {
                  "id":6078,
                  "childName":"My Fitness Pal"
               }
            ]
         },
         {
            "id":1024,
            "childName":"Touchpoint",
            "childOpen":true,
            "children":[
               {
                  "id":1025,
                  "childName":"MyFitnessPal"
               }
            ]
         }
      ]
   },
   {
      "id":5354,
      "name":"Recipe Dietary Preferences",
      "shortName":"Recipe Dietary Preferences",
      "open":true,
      "hasSmarTagChild":false,
      "displayOrder":29,
      "children":[

      ]
   },
   {
      "id":5374,
      "name":"Non Dairy & Whole Grain ",
      "shortName":"Non Dairy & Whole Grain ",
      "open":true,
      "hasSmarTagChild":false,
      "displayOrder":37,
      "children":[

      ]
   },
   {
      "id":6122,
      "name":"Compass BE Program",
      "shortName":"Compass BE Program",
      "open":true,
      "hasSmarTagChild":false,
      "displayOrder":73,
      "children":[
         {
            "id":738,
            "childName":"Compass - BE",
            "childOpen":true,
            "children":[
               {
                  "id":739,
                  "childName":"2Mato"
               },
               {
                  "id":742,
                  "childName":"Asian"
               },
               {
                  "id":5588,
                  "childName":"BUILD - Pizza by Design"
               },
               {
                  "id":1236,
                  "childName":"Chef Bal"
               },
               {
                  "id":899,
                  "childName":"Chef Jet"
               },
               {
                  "id":761,
                  "childName":"Create "
               },
               {
                  "id":856,
                  "childName":"Eating Well"
               },
               {
                  "id":5820,
                  "childName":"FED"
               },
               {
                  "id":844,
                  "childName":"Flexitarian"
               },
               {
                  "id":740,
                  "childName":"Foodworks Casual Catering"
               },
               {
                  "id":845,
                  "childName":"Limited Time Offer"
               },
               {
                  "id":855,
                  "childName":"Meeting Well"
               },
               {
                  "id":5066,
                  "childName":"Mondo Subs"
               },
               {
                  "id":741,
                  "childName":"National Nutrition Month"
               },
               {
                  "id":5065,
                  "childName":"On the Go"
               },
               {
                  "id":770,
                  "childName":"Pollo"
               },
               {
                  "id":5153,
                  "childName":"Puur"
               },
               {
                  "id":5312,
                  "childName":"Rooted"
               },
               {
                  "id":847,
                  "childName":"Simply Puur"
               },
               {
                  "id":783,
                  "childName":"Sono"
               },
               {
                  "id":5902,
                  "childName":"Teaching Kitchen"
               },
               {
                  "id":5453,
                  "childName":"VegRev"
               },
               {
                  "id":1165,
                  "childName":"Za'tar"
               },
               {
                  "id":6053,
                  "childName":"Root to Stem"
               }
            ]
         },
         {
            "id":401,
            "childName":"Compass-Balance",
            "childOpen":true,
            "children":[
               {
                  "id":614,
                  "childName":"No Sugar Added"
               },
               {
                  "id":720,
                  "childName":"Superfoods"
               },
               {
                  "id":5145,
                  "childName":"Avoiding Gluten"
               },
               {
                  "id":5326,
                  "childName":"OASIS"
               }
            ]
         },
         {
            "id":1139,
            "childName":"Compass-Balance Kitchen",
            "childOpen":true,
            "children":[
               {
                  "id":1200,
                  "childName":"Beverage Best"
               },
               {
                  "id":1201,
                  "childName":"Beverage Better"
               },
               {
                  "id":1212,
                  "childName":"Breakfast Entree"
               },
               {
                  "id":1211,
                  "childName":"Breakfast Grain"
               },
               {
                  "id":1214,
                  "childName":"Chef's Table"
               },
               {
                  "id":1141,
                  "childName":"Create "
               },
               {
                  "id":1232,
                  "childName":"Deli"
               },
               {
                  "id":1142,
                  "childName":"Entree"
               },
               {
                  "id":1231,
                  "childName":"Grill"
               },
               {
                  "id":1145,
                  "childName":"Outtakes"
               },
               {
                  "id":1170,
                  "childName":"Pizza/Flatbread"
               },
               {
                  "id":1144,
                  "childName":"Salad "
               },
               {
                  "id":1199,
                  "childName":"Sides"
               },
               {
                  "id":1140,
                  "childName":"Smoothies"
               },
               {
                  "id":1169,
                  "childName":"Soups"
               }
            ]
         },
         {
            "id":717,
            "childName":"Compass-On the Go",
            "childOpen":true,
            "children":[

            ]
         },
         {
            "id":753,
            "childName":"Compass-Whole+Sum",
            "childOpen":true,
            "children":[
               {
                  "id":1243,
                  "childName":"Breakfast"
               },
               {
                  "id":5821,
                  "childName":"Bowl 600"
               },
               {
                  "id":759,
                  "childName":"Stew/Bowl 350"
               },
               {
                  "id":763,
                  "childName":"ToGo 100"
               },
               {
                  "id":762,
                  "childName":"ToGo 300"
               },
               {
                  "id":757,
                  "childName":"Vegetable/Fruit 100"
               },
               {
                  "id":756,
                  "childName":"Whole Grain 150"
               },
               {
                  "id":758,
                  "childName":"Whole Protein 250"
               }
            ]
         }
      ]
   },
   {
      "id":6123,
      "name":"Compass Core 4",
      "shortName":"Compass Core 4",
      "open":true,
      "hasSmarTagChild":false,
      "displayOrder":74,
      "children":[

      ]
   },
   {
      "id":6124,
      "name":"Compass-Ingredient Recipe",
      "shortName":"Compass-Ingredient Recipe",
      "open":true,
      "hasSmarTagChild":false,
      "displayOrder":75,
      "children":[
         {
            "id":1235,
            "childName":"Compass-Ingredient Recipe",
            "childOpen":true,
            "children":[

            ]
         }
      ]
   },
   {
      "id":6125,
      "name":"Culinart 500 cal",
      "shortName":"Culinart 500 cal",
      "open":true,
      "hasSmarTagChild":false,
      "displayOrder":76,
      "children":[

      ]
   },
   {
      "id":6133,
      "name":"Packaged Labels",
      "open":true,
      "hasSmarTagChild":false,
      "displayOrder":84,
      "children":[
         {
            "id":1205,
            "childName":"Package Labels",
            "childOpen":true,
            "children":[
               {
                  "id":1242,
                  "childName":"Keep Refrigerated"
               }
            ]
         }
      ]
   }
];
 
    constructor() {
        console.log(this.result)
    }
}
