
/*>>>>>>>>>>rendering an element */
/*
ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root")) 
*/

/*
ReactDOM.render(
<ul>
<li>Point1</li>
<li>Point2</li>
</ul>, document.getElementById('root'))
*/

/*
>>>>>>>>>>>>>defining a component using function
*/

function MainComponent(){
    return (
        <h1> Hello world component</h1>
    )
}

/*>>>>>>>>>>>>>>>>rendering a component */
/*
ReactDOM.render(
<div>
<MainComponent/>
</div>,
document.getElementById('root')
)
*/
/*creating an element and adding to html root element */
/*
const h1Ele =document.createElement('h1')
const rootEle = document.querySelector('root')

h1Ele.textContent=("h1 tag content")
h1Ele.classList.add("header")
document.getElementById('root').appendChild(h1Ele)
*/

/*>>>>>>>>>>>>>>>>>>Creating a nav bar with nav semantic, h1 and ul pricing about contact */


function NavbarComponent(){
    return(
        <div>
            <nav>
                <h1>Webtools Website</h1>
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}
const navbar =  <div>
<nav>
    <h1>Webtools Website</h1>
    <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
</nav>
</div>
document.getElementById('root').append(JSON.stringify(navbar))

//ReactDOM.render(<NavbarComponent/>,document.getElementById('root'))