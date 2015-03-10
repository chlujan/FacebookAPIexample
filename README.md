# FacebookAPIexample

Calvin Lujan

1. Project description: 
	A social site that matches users based from their “list” of interest. A match will be having the users lists at least matching 40%. Once matched each user can view each other's complete “list” and contact them through a messaging system on the site.

2. List of related API:
Facebook Graph
DropBox
RedBox
Marvel Comics

3. Description of APIs:
	Facebook Graph: with user login, able to obtain data from the user, such as friends, posts, things liked, and photos. There is also public data that does not need user login, such as CocaCola or GitHub. 
	
	DropBox: allows manipulation of the DropBox through the API. Functions include read and write files to the users DropBox account. 

	RedBox: gives information on available movies or video games in a RedBox kiosk. Also gives locations of kiosk and gives information of specific details of the inventory. 

	Marvel Comics: gives data on various aspects about Marvel comic books, such as characters, story lines, writers, artists and crossover events.

5. I chose the Facebook Graph API because it can give details about a user that we the developing team do not need to prompt for. Using that information we can create our list for matching and comparison. 

6. Potential issues are a few. If the user to our site does not have a facebook account we can not even use the API, also if the user's facebook account is not updated or not used. Another issue is since Facebook and our site is very similar and when our developing site reached the scalable level comparable to Facebook then there might be a conflict where  facebook will not let us use the API. 

7. Using the API was quite easy. Many of the other API are required some sort of authentication key. But to get information from the user the user would need to be login into facebook on the device they are using our site. Using this API is mostly parsing information. 

8. My example is used in a search function, but it is really strict. It searches for the exact word typed. When input is submitted, it goes and finds it's Page in Facebook and returns its name and a description if it entered in the Facebook Page. This can be used and expanded when a user is curious about some item on some other user's list, such as GitHub. They can enter GitHub into the search box and if there is  facebook page then it is returned with some details and may prompt if they would like to add to their own list.  
