if(window.innerWidth <= 500)
{
  window.addEventListener('load', function () {
    const element = document.querySelector('body');
    
    const rect = element.getBoundingClientRect();
    
    let maxWidth = rect.width+'px'
    
    let hero = document.querySelector('.hero')
    hero.style.width = maxWidth
    hero.style.overflow = 'hidden'
    
    console.log('Width:', rect.width);
  })
}
function phone_check()
{
  if(window.innerWidth < 1000)
    {
      let bg_logo = document.querySelector(".hero .bg-logo")
      bg_logo.innerHTML = `<mask id="path-1-inside-1_137_123" fill="white">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 26H25H50V51H25V76H50V101H25H0V76V51V26Z"/>
        </mask>
        <path d="M0 26V25H-1V26H0ZM50 26H51V25H50V26ZM50 51V52H51V51H50ZM25 51V50H24V51H25ZM25 76H24V77H25V76ZM50 76H51V75H50V76ZM50 101V102H51V101H50ZM0 101H-1V102H0V101ZM25 25H0V27H25V25ZM50 25H25V27H50V25ZM51 51V26H49V51H51ZM25 52H50V50H25V52ZM26 76V51H24V76H26ZM25 77H50V75H25V77ZM49 76V101H51V76H49ZM50 100H25V102H50V100ZM0 102H25V100H0V102ZM-1 76V101H1V76H-1ZM-1 51V76H1V51H-1ZM-1 26V51H1V26H-1Z" fill="#C778DD" mask="url(#path-1-inside-1_137_123)"/>
        <mask id="path-3-outside-2_137_123" maskUnits="userSpaceOnUse" x="49" y="0" width="52" height="77" fill="black">
        <rect fill="white" x="49" width="52" height="77"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M50 1H75H100V26V51V76H75H50V51H75V26H50V1Z"/>
        </mask>
        <path d="M50 1V0H49V1H50ZM100 1H101V0H100V1ZM100 76V77H101V76H100ZM50 76H49V77H50V76ZM50 51V50H49V51H50ZM75 51V52H76V51H75ZM75 26H76V25H75V26ZM50 26H49V27H50V26ZM75 0H50V2H75V0ZM100 0H75V2H100V0ZM101 26V1H99V26H101ZM101 51V26H99V51H101ZM101 76V51H99V76H101ZM75 77H100V75H75V77ZM75 75H50V77H75V75ZM51 76V51H49V76H51ZM50 52H75V50H50V52ZM74 26V51H76V26H74ZM50 27H75V25H50V27ZM49 1V26H51V1H49Z" fill="#C778DD" mask="url(#path-3-outside-2_137_123)"/>
      `
    }
}
window.addEventListener('resize', phone_check)