export default function Undo({ onClick, disabled })
{
   return(
   <>    
    <button type ="button" onClick={onClick} disabled={disabled}> Undo </button>   
   </>
   )
}