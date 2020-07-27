# ReadmeApp

**This is a mobile app**

### [Live Demo](https://readmea.herokuapp.com/)

The basic idea of this app is to select a random book from [New York Times Best Sellers](https://www.nytimes.com/books/best-sellers/) list.

Searching for book is managed by combining two APIs - [NY Times Books API](https://developer.nytimes.com/docs/books-product/1/routes/lists/best-sellers/history.json/get) and [Google Books API](https://developers.google.com/books/docs/v1/using)

- First, random book from current best sellers list is chosen
- Then, Google Books API is called by isbn number, to get cover of the book (if exists).
- Finally, `book` object is created, gathering data from both APIs and result is shown to user

### Install instructions

```
$ git clone git://github.com/Msulecki/ReadmeApp.git
$ npm start
```

## App usage

**NOTE:** There can be login screen visible on first load, but it's only for visual/immersion effect, and you can provide any values, there not stored anywhere.

### 1. Topbar

![Topbar](https://github.com/Msulecki/ReadmeApp/blob/master/client/images/topbar.png)

Topbar is visible at any time using the app. There is heading showing current tab, and two buttons:

- Add a book on the left
- Settings on the right

### 2. Add a book

![Add a book](https://github.com/Msulecki/ReadmeApp/blob/master/client/images/topbar_new-book.png)

When Add a book card is opened, the + button changes to X indicating you can close the tab by clicking upper left icon second time. Reopening this tab results in selecting new random book from list.
After a short loading, a result is shown, providing book title, author, short desctiption and optional: book cover, published date and page count.

Moreover, on this page, bottom navbar is changed to action navbar:

![Bottom navbar](https://github.com/Msulecki/ReadmeApp/blob/master/client/images/bottombar_new-book.png)

When you can:

- Add a review
- Add book to favourites
- Add book to wishlist

When adding a review, a review modal is shown, allowing to give selected book a rate from 0 to 6.

![Review modal](https://github.com/Msulecki/ReadmeApp/blob/master/client/images/review-modal.png)

Then you can view your book lists by navigating through bottom navbar:

![Navbar](https://github.com/Msulecki/ReadmeApp/blob/master/client/images/bottombar.png)

### 3. Homepage

Homepage functions as a welcome screen with short note on app.

### 4. Reviews

![Reviews](https://github.com/Msulecki/ReadmeApp/blob/master/client/images/reviews-item.png)

You can view your hitory of reviews on this tab. Clicking on item will expand more info, so rating can be viewed.

![Reviews expanded](https://github.com/Msulecki/ReadmeApp/blob/master/client/images/reviews-item-expanded.png)

### 5. Favourites

![Favourites](https://github.com/Msulecki/ReadmeApp/blob/master/client/images/favourites-item.png)

It's a simple list of positions added to favourites.

### 6. Wishlist

![Wishlist](https://github.com/Msulecki/ReadmeApp/blob/master/client/images/wishlist-item.png)

There is also a wishlist from which you can add position to reviews by clicking a star icon. There will be review modal shown for submitting your rating.

##### **Aditional info**

At any time, you can delete chosen position from any list by clicking a trash can icon.

### 7. Settings

![Settings](https://github.com/Msulecki/ReadmeApp/blob/master/client/images/settings.png)

There is a settings tab, but (for now) it's just a mockup with no effect on app usage. However, you can reset all settings by clicking reset button. If you wish, you can play with HSL color rage inputs :smile:

## Technical info

This app works to some level as a PWA app. So you can add it to your homescreen with dedicated icon and view lists when offline. Obviously, adding new book feature won't work without internet conection, as it is loading content from 3rd party APIs.

Data is stored in localStorage for now, but i'll look up to indexedDB in future.

This app was created in React with hooks and routing. For styling, i've used Sass.

If you want to test the code, you should provide your own api keys, in Add.js at lines:

```javascript
16 const apiNytimes = NYTIMES_APIKEY;
17 const apiGoogleBooks = GOOGLEBOOKS_APIKEY;
```

I'll try to add some new cool features (like working settings tab) in future. Thanks!
