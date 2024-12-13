import { useState, useEffect } from "react";

const Accordian = ({ checked }) => {
  const accordianInfo = [
    {
      question: "Do I have to allow the use of cookies?",
      answer:
        "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
    },
    {
      question: "How do I change my My Page password?",
      answer:
        "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
    },
    {
      question: "What is BankID?",
      answer:
        "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
    },
    {
      question: "Whose birth number can I use?",
      answer:
        "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
    },
    {
      question: "When do I recieve a password ordered by letter?",
      answer:
        "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan.",
    },
  ];

  const [openList, setOpenList] = useState(() =>
    accordianInfo.map((el) => ({ question: el.question, show: false }))
  );

  //scope to use useReducer

  const onButtonClick = (question) => {
    let openAccoridanList = [...openList];
    let updatedList;
    if (!checked) {
      //marking all values to false
      updatedList = openAccoridanList.map((el) => ({
        ...el,
        show: el.question === question ? el.show : false, // true for the matched element, false for others
      }));
      let toggleValue = updatedList.find((el) => el.question === question);
      toggleValue.show = !toggleValue.show;
      setOpenList(updatedList);
    } else {
      //for multiple accordion open allowed
      let toggleValue = openAccoridanList.find(
        (el) => el.question === question
      );
      toggleValue.show = !toggleValue.show;
      setOpenList(openAccoridanList);
    }
  };

  useEffect(() => {
    if (!checked) {
      let openListCopy = [...openList];
      setOpenList(
        openListCopy.map((el) => ({ question: el.question, show: false }))
      );
    }
  }, [checked]);

  return (
    <div className="accordian-container">
      {accordianInfo.map(({ question, answer }) => {
        return (
          <div className="single-accordian" key={question}>
            <div classname="accordian-text">
              <div style={{ paddingBottom: "10px" }}>
                <strong>{question}</strong>
              </div>
              <div
                className={`${
                  openList.find((el) => el.question === question).show
                    ? "show"
                    : "hide"
                }`}
              >
                {answer}
              </div>
            </div>
            <div
              className="accordian-button"
              onClick={() => onButtonClick(question)}
            >
              {openList.find((el) => el.question === question).show ? "-" : "+"}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;
