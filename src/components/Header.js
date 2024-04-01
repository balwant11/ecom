import '../App.css'

function Header({count, setShowCart}) {
    return(
        <div className='flex shopping-card'>
            <div onClick={()=>setShowCart(false)} style={{cursor:'pointer'}}>Shopping Cart App</div>
            <div onClick={()=>setShowCart(true)} style={{cursor:'pointer'}}>Cart<sup>{count}</sup></div>
        </div>
    )
}

export default Header