export default function Redo({ onClick, disabled })
{
   return(
   <>    
    <button type ="button" onClick={onClick} disabled={disabled}> Redo </button>   
   </>
   )
}
