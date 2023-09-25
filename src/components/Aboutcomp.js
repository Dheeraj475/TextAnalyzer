import React from 'react'

export default function Aboutcomp(props) {


  let myStyle = {
    color : props.mode === "dark"?"white":"black", 
  }  
   

  

  return (
    <>
    <div className="container my-4" style={myStyle}>
    <div className="row">
  <div className="col-4">
    <div id="list-example" className="list-group">
      <a className="list-group-item list-group-item-action bg-info  rounded-pill my-1" href="#list-item-1" style={myStyle}><b>Games</b></a>
      <a className="list-group-item list-group-item-action bg-info  rounded-pill my-1" href="#list-item-2" style={myStyle}><b>Coding</b></a>
      <a className="list-group-item list-group-item-action bg-info  rounded-pill my-1" href="#list-item-3" style={myStyle}><b>Business</b></a>
      <a className="list-group-item list-group-item-action bg-info  rounded-pill my-1" href="#list-item-4" style={myStyle}><b>Job</b></a>
    </div>
  </div>
  <div className="col-8" >
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
      
      <h4 id="list-item-1">Games</h4>
      <p>A game is a structured form of play, usually undertaken for entertainment 
        or fun, and sometimes used as an educational tool.[1] Many games are 
        also considered to be work (such as professional players of spectator 
        sports or games) or art (such as jigsaw puzzles or games involving an 
        artistic layout such as Mahjong, solitaire, or some video games).
        Games are sometimes played purely for enjoyment, sometimes for achievement 
        or reward as well. They can be played alone, in teams, or online; by amateurs 
        or by professionals. The players may have an audience of non-players, such as 
        when people are entertained by watching a chess championship. On the other hand, 
        players in a game may constitute their own audience as they take their turn to 
        play. Often, part of the entertainment for children playing a game is deciding 
        who is part of their audience and who is a player. A toy and a game are not the 
        same. Toys generally allow for unrestricted play whereas games present rules for 
        the player to follow.</p>

      <h4 id="list-item-2">Coding</h4>
      <p>Computer programming is the process of performing particular computations (or more generally, accomplishing specific computing results), usually by designing and building executable computer programs. Programming involves tasks such as analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms (usually in a particular programming language, commonly referred to as coding).[1][2] The source code of a program is written in one or more languages that are intelligible to programmers, rather than machine code, which is directly executed by the central processing unit. The purpose of programming is to find a sequence of instructions that will automate the performance of a task (which can be as complex as an operating system) on a computer, often for solving a given problem. Proficient programming thus usually requires expertise in several different subjects, including knowledge of the application domain, specialized algorithms, and formal logic.</p>
      
      <h4 id="list-item-3">Business</h4>
      <p>Business is the practice of making one's living or making money by producing 
        or buying and selling products (such as goods and services).[1][2][3][4] It 
        is also "any activity or enterprise entered into for profit."[5]
        Having a business name does not separate the business entity from the owner, 
        which means that the owner of the business is responsible and liable for debts 
        incurred by the business. If the business acquires debts, the creditors can go 
        after the owner's personal possessions.[6] The taxation system for businesses 
        is different from that of the corporates. A business structure does not allow 
        for corporate tax rates. The proprietor is personally taxed on all income from 
        the business.
        The term is also often used colloquially (but not by lawyers or public officials) 
        to refer to a company, such as a corporation or cooperative.
        Corporations, in contrast with sole proprietors and partnerships, are a separate 
        legal entity and provide limited liability for their owners/members, as well 
        as being subject to corporate tax rates. A corporation is more complicated and 
        expensive to set up, but offers more protection and benefits for the owners/members.</p>
      
      <h4 id="list-item-4">Job</h4>
      <p>A job is any legal activity that allows an individual to perform a service 
        and in return earn credits she/he can use to buy things.
         A job can mean "some work that has to be done", for example: there are jobs to 
         be done in the house: washing up, mending things that are broken, etc.
         A job can also mean: work that a person does to earn money. The word "job" may 
         be used when a person works for someone else "an employer" who pays them for 
         the work. For example, a teacher's job is to teach children or adults. A taxi 
         driver's job is to drive people in a taxi. A firefighter rescues people from 
         burning buildings and puts out fires. A dermatologist's job is to diagnose and 
         treat skin diseases. Some jobs pay very little.
         The International Labour Organization was established to make people's job 
         conditions better. It became an organization of the United Nations in 1946.</p>
    </div>
  </div>
</div>
</div>
    </>
  )
}
