import React from "react";
import styled from "styled-components";
import moment from "moment";
import Layout from "../components/Layout";

const words = [
  {
    id: "AkKCX",
    word: "Once",
    votes: [{ word: "Once", votes: 542 }, { word: "So", votes: 53 }]
  },
  { id: "aDDwC", word: "upon" },
  { id: "52d4", word: "a" },
  { id: "5235c", word: "time" }
];

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper non nibh et pulvinar. Sed consequat gravida mi. Vivamus dignissim finibus lectus, sed mattis elit semper et. Duis scelerisque in urna sit amet pretium. Curabitur volutpat, turpis in vulputate blandit, ante lacus ornare nisi, quis posuere mauris metus ut leo. Duis at placerat odio. Nunc mauris metus, ornare ac lectus eget, porta ultricies turpis. Nulla ut sapien nulla. Nulla porta congue tortor, sed lacinia lectus bibendum et. Donec rutrum semper mollis. Duis fringilla, ex sit amet iaculis pretium, eros nibh pellentesque risus, sit amet posuere ipsum justo sit amet quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;

Sed accumsan est nec diam sodales pellentesque. Fusce laoreet viverra mi varius pharetra. Fusce varius ante neque, nec molestie ipsum ornare eget. Etiam id lacus ullamcorper, dignissim odio eget, pulvinar enim. Cras porttitor fermentum eros vel pharetra. Curabitur lobortis hendrerit metus, et tristique arcu vehicula vitae. Vestibulum ac orci porttitor, sagittis velit nec, maximus erat. Nullam non erat iaculis, finibus odio ut, euismod risus. Donec eros dolor, fringilla sit amet augue et, laoreet convallis erat. Phasellus turpis tellus, laoreet ut varius id, pulvinar non nulla. Nulla molestie convallis purus dictum ullamcorper.

Aenean tempus cursus consectetur. Ut id eros odio. Sed malesuada congue molestie. Aliquam turpis ante, consequat non mattis id, rutrum vitae dui. Sed consequat metus eu ligula sodales cursus. Suspendisse aliquam mollis metus, id placerat diam eleifend et. Curabitur eu augue quis purus efficitur interdum in ac augue. Ut placerat aliquet placerat. In gravida metus interdum felis ornare elementum. Etiam quis luctus eros.

Donec ullamcorper scelerisque dictum. Quisque pellentesque velit odio, in tincidunt nibh fringilla nec. Vestibulum a lacus ut lacus imperdiet porta. Pellentesque id elit non eros cursus suscipit id eget ligula. In vitae pellentesque massa. Maecenas eget pulvinar diam, et tempus massa. Nulla at felis vel elit tempor gravida nec non est. Ut mi orci, semper sit amet mauris a, pellentesque scelerisque massa. Morbi tempor, ligula finibus sodales efficitur, mi eros laoreet nisl, mollis faucibus nibh nisi eu justo. Ut dolor nibh, luctus eget dui et, vestibulum vulputate augue. Integer vestibulum, tortor sit amet ultrices auctor, ante purus euismod eros, molestie pellentesque turpis mauris sed leo. Pellentesque cursus, nisi dictum ultrices vulputate, lacus ipsum viverra orci, sit amet ultricies dolor nisl et nisi. Aliquam dictum pharetra eleifend. Praesent nec massa ut arcu tempor posuere. Proin maximus enim libero, eu lacinia tortor aliquam`;

const stringToWordObjects = string => {
  const array = string.split(" ");
  return array.map((word, i) => ({ word, id: i }));
};

const votes = [
  { id: "asdd", word: "vitae", votes: 43 },
  { id: "sadCx", word: "congue", votes: 23 },
  { id: "asdw", word: "odio", votes: 12 },
  { id: "qiok", word: "tempus", votes: 7 }
];

const Votes = styled.div`
  display: inline-block;
  position: absolute;
  margin-left: 5px;
  color: rgba(14, 30, 37, 1);
  /* @keyframes blink {
    from {
      color: green;
    }
    to {
      color: red;
    }
  }
  animation: blink 2s infinite alternate; */
`;

const Line = styled.div`
  position: absolute;
  bottom: 0px;
  background: blue;
  height: 3px;
  width: ${props => props.width}%;
`;

const Vote = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  .votes {
    color: blue;
    margin-left: 15px;
  }
`;

const Countdown = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  color: rgba(14, 30, 37, 0.5);
  text-align: center;
`;
const Words = styled.div`
  padding-bottom: 150px;
`;

const ControlPanel = styled.div`
  position: fixed;
  //background: red;
  padding: 20px;
  left: 0px;
  bottom: 0px;
  //height: 200px;
`;

const Input = styled.input`
  border: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 20px;
  color: rgba(14, 30, 37, 1);
  line-height: 1.5;
  padding: 0;
  &:focus {
    outline: none;
  }
`;
export default class extends React.Component {
  constructor(props) {
    super(props);

    this.thingamob = React.createRef();
    this.state = {
      time: new Date().toLocaleString(),
      newDate: new Date(),
      dateNow: Date.now(),
      words: stringToWordObjects(loremIpsum)
    };
  }
  componentDidMount() {
    this.scrollToBottom();
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString(),
      newDate: new Date(),
      dateNow: Date.now()
    });
  }

  scrollToBottom = () => {
    this.thingamob.current.scrollIntoView({ behavior: "smooth" });
  };

  onKeyPress = e => {
    if (e.nativeEvent.key === "Enter") {
      this.setState({ input: false, word: e.target.value });
    }
  };
  toggleInput = () => this.setState({ input: !this.state.input });

  addWord = () =>
    this.setState({
      words: [...this.state.words, { word: "curriculum", id: "24f" }]
    });

  render() {
    // Your moment
    const mmt = moment();
    const mmtNextHour = mmt.clone().endOf("hour");
    const mmtNextMinute = mmt.clone().endOf("minute");
    const diffMinutes = mmtNextHour.diff(mmt, "minutes");
    const diffSeconds = mmtNextMinute.diff(mmt, "seconds");

    return (
      <Layout>
        <Words>
          {this.state.words.map(({ id, word }) => (
            <span key={id}>{word} </span>
          ))}{" "}
          {this.state.input ? (
            <Input
              autoFocus
              onBlur={this.toggleInput}
              onKeyPress={this.onKeyPress}
            />
          ) : (
            <Votes onClick={this.toggleInput}>
              <ul ref={this.thingamob}>
                {votes.map(({ id, word, votes }, i, array) => (
                  <Vote key={id}>
                    <span>{word}</span>
                    <span className="votes">{votes}</span>
                    <Line width={(votes / array[0].votes) * 100} />
                  </Vote>
                ))}
                {this.state.word && (
                  <Vote>
                    <span style={{ color: "blue" }}>{this.state.word}</span>
                    <span className="votes">1</span>
                    <Line width={(1 / votes[0].votes) * 100} />
                  </Vote>
                )}
              </ul>
            </Votes>
          )}
        </Words>
        <ControlPanel>
          {/* <button onClick={this.addWord}>Add word</button> */}
          <Countdown>
            {diffMinutes} minutes and {diffSeconds} seconds left to vote for the
            next word
          </Countdown>
        </ControlPanel>
      </Layout>
    );
  }
}
