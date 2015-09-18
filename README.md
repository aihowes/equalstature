# EqualStature
EqualStature matches the height of elements using the tallest (natural) height
<dl>
  <dt>Equal <em>(adj)</em></dt>
  <dd>Having the same mathematical value</dd>
  <dt>Stature <em>(noun)</em></dt>
  <dd>A person's natural height</dd>
</dl>



## Another Equal Heights Plugin... Seriously?
This small plugin was mearly created as a dab into creating jQuery plugins as well as just wanting a quick, easy and small bit of code to sort out some content block heights. It is in no way perfect and if you want something a little more robust try [something else](https://github.com/liabru/jquery-match-height) _(which may be a bit bulkier)_. Feel free to create a pull request if there are any improvements you can make and let me know of any issues. 

## How To Use It
EqualStature uses the elements children to find out the natural height of each element. It will then get the max height of all those elements and resize them all to be equal heights.

```javascript
// Initialise the plugin
document.ready(function(){
	$('.elements').equalStature();
});

// Destroy the plugin
$('.elements').equalStature('destroy');
```
The plugin uses min-height, allowing to grow in size if necessary. The destroy flag is just used as a quick way to reset min-height if need be. 


## Dependencies
EqualStature requires [jQuery](https://jquery.com/) 1.4 or higher _(needs testing)_. However I may attempt a JS version soon.

## License
EqualSature is released under the [MIT License](https://opensource.org/licenses/MIT).

## Author 
[Alex Howes](http://alexhowes.co.uk) - [@aihowes](http://twitter.com/aihowes)