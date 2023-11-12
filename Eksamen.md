# EKSAMEN IT2805

## Introduction
#### Webarchitecture

Server-client relationship, Cloud, Network

#### The Internet
TCP/IP, OSI-model: application, transport, network, data link, physical, Domains and DNS, Routing, WWW,

## Document Object Model
Programming interface for HTML an XML. A web page is a document, which can be displayed in the browser, the HTML file itself or as a document tree. This HTML file:
```
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>
<body>

</body>
</html>
```
Would give a document tree with a HTML root consisting of two branches, head and body.

## HTML
This "<...>" is called a tag, while this "<...></...>" is called an element. HTML code are the characters inside the angled brackets.

#### Document structure
- Document declaration: ```<!DOCTYPE html>``` to inform the browser to read the doc as a HTML5 page
- ```<html>```: encloses everything. all code should be written within these tags. children: <head> and <body>
- ```<head>```: contains information about the website. not visible on website. children: <link>, <meta> and <title> 
- ```<body>```: everything inside browser window. child elements are often eiter *inline* or *block* elements, depending on ```display```. 
- 	*block*: start on a new line and takes up the full width available, e.g. ```<div>```, ```<h1 - h6>```, ```<p>```, ```<form>```
- 	*inline*: does not start on a new line and takes up as much width as necessary, e.g. ```<span>```, ```<a>```, ```<img>```

#### Attributes 
- Provides additional information about the content of an element, e.g. ```<p lang="no">Et element med norsk tekst</p>```
- Helps browsers render elements correctly

#### Text
- Headings: ranges from h1 - h6, where h1 are the most important and biggest and h6 is the least important and smallest. convention: one h1 pr page, otherwise h2. not lower level headings to decrease size, but CSS font-size.
- Paragraphs: block of text. block element
- Special markup: boldline (```<b>```), italic (```<i>```), superscript and subscriptline breaks (```<sup/sub>```), white space collapsing, line breaks (```<br>```).

#### Lists
- ordered: ```<ol>```
- unordered: ```ul>```
- use ```<li>```-elements inside. can have lists within lists.

#### Links:
- ```<a href=""></a>```: everything inside the tags are clickable. href --> URL.
- Absolute URLs: other site
- Relative URLs: within our site
- Specific part of page ```href="#...```--> ```id="..."```
- New tab: ```target="_blank"```
- E-mail links: ```<a href="mailto:example@email.com">E-mail example</a>```

#### Images
- ```<img src="" alt="text if img fails to load">```
- good practice to specify size
- inline element
- when using img: right format (JPG, GIF, PNG), right size, measure in px
- formats: lossless - smaller but quality still OK, lossy - smaller and quality bad
- JPG: lossy format, best for pictures
- PNG: lossless, best for logos and graphics
- GIF: limited of colors, bad for photos with high resolution. good for animations, bad for everything else.
- SVG: vector format, can scal indefinitely without loosing quality. good for logos, graphics and animations, bad for everything else.

#### Tables
```
<table>                                                  <table>
	<tr>                                                     <tr>
		<th>First name</th>					<th scope="row">First name</th>
		<th>Last name</th>		 			<td>Admin</th>
		<th>Age</th>					 </tr>
	</tr>							 <tr>
	<tr>								<th scope="row">Last name</th>
		<td>Admin</td>                                          <td>Johansen</td>
		<td>Johansen</td>                                </tr>
		<td>69</td>                                      <tr>
	</tr>                                                           <th scope="row">Age</th>
</table>                                                                <td>69</td>
								 </tr>
							</table> 
```

#### Semantic elements
- Header: ```<header>```
- Footer: ```<footer>```
- Section: ```<section>```
- Article: ```<article>```
- Nav: ```<nav>```, used in header
- Input: ```<input>```, button, file, password, submit
- Output: ```<output>```
- Figure: ```<figure><img><figcaption></figcaption></figure>```
- Strong: ```<strong>```
- Em: ```<em>```
- Quotes: ```<blockquote/q cite="">```
- Address: ```<address><a href=""></a></address>```, can be used with article to adress author


#### Site structure
- URL: used to link to another document or resource. follows a protocol. "http://" --> protocol, "www.example.com" --> domain
- GET: request data, not manipulate data on server side, cached, browser history, can be hacked, length restrictions
- POST: submit data, update data on server side, separate message (not in URL), never cached, not browser history, no max length
- Site map --> Storyboard



## CSS
Think of each element as a box

#### Cascade
Order of precence: 
- The last rule
- Specifity
- Important
- Level of styles: inline style (in tag), embedded styles (inside ```<style>```-element [in head]), external style sheet, user specified styles and browser default.
  Inline style highest precedence --> browser default lowest precedence

#### Other things to remember
- Inheritance: if said in the parent element, all children will follow unless other is specified.
- Selectors: ```#id```, ```.class```, ```element```, ```*```, ```li  > a``` (all links inside list), ```p a``` (any lik inside a paragraph), ```h1+p``` (first paragraph after h1), ```h1~p``` (all paragraphs after h1)
- Color: can be specified using hex codes (```#XXXXXX```), color names (```red```) or RGB values (```rgb[a](x, y, z, [opacity])```)
- Margin: space between border and neighbours
- Padding: space between content and border
- Centering elements: ```margin-left:auto``` and ```margin-right:auto```
- Border: ```border-style```(e.g. none, hidden, dotted, dashed, solid, double), ```border-color``` and ```border-width```

#### Text
- typeface: serif (e.g. times new roman), sans-serif (e.g. arial), monospace (e.g. courier)
- weight: light, medium, regular, bold and black
- style: normal, *italic*, or **oblique**


#### Pseudo-classes 
```selector:pseudo{propery:value;} ```

  
#### **Properties**:
- ```display```: inline, block


## Web and multimedia

## Forms and validation

## Responsive web design

## JavaScript
