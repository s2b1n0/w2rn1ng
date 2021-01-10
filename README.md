# Welcome to w2rn1ng
This is a lib to **fast** and **easy** implementing a **warning message** about **Self-XSS** in the **browser** of your application.

![Alt text](documentation/how_works.png?raw=true "Working")

## Quick start
Just download **compiled/w2rn1ng-min.js** to your application js file path and add the script bellow in your html file.

```    
    <script src="<PATH>/w2rn1ng-min.js"></script>
    <script>  
      let startApp = new Warning("en")  
      startApp.run()  
    </script>
```

## Supported languages
| Id| Language|
|--|--|
| en | English (American) |
| es | Spanish (Spain)|
| pt-br | Portuguese (Brazil)

## Contributing Workflow
Here’s how we suggest you go about proposing a change to this project:

1.  [Fork this project](https://help.github.com/articles/fork-a-repo/)  to your account.
2.  [Create a branch](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository)  for the change you intend to make.
3.  Make your changes to your fork.
4.  [Send a pull request](https://help.github.com/articles/using-pull-requests/)  from your fork’s branch to our  `main`  branch.

Using the web-based interface to make changes is fine too, and will help you by automatically forking the project and prompting to send a pull request too.

## License
[GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)
