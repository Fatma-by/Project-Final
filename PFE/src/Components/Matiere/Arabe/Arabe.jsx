import React, { useState } from "react";
import { Card } from "../../Card/Card";
import cardList from "../../Card/cardList";
import '../../Card/Card.css'


export default function Arabe() {
  return (
    <>



      <div className="Matiere">
        {cardList.map((cardList) => (
          <Card
            key={cardList.id}
            image={cardList.image}
            name={cardList.name}
            
          />
        ))}
      </div>
    </>
  );
}
