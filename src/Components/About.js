import { Card, Image, Icon } from "semantic-ui-react";
import image from "./Images/Me.JPG";
function About() {
  return (
    <Card className="ui centered">
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>Asad Majeed</Card.Header>
        <Card.Meta>
          <span className="date">Web Developer</span>
        </Card.Meta>
        <Card.Description>
          I am passionate web developer. I am eager to learn new technologies. I
          created this website by using React JS, Bootstrap, Semantic UI and
          Node JS.
        </Card.Description>
        <Card.Content extra>
          <a href="https://github.com/asad-be18">
            <Icon name="github" size="big" />
          </a>
          <a href="https://linkedin.com/in/syedasad00">
            <Icon name="linkedin" size="big" />
          </a>
        </Card.Content>
      </Card.Content>
    </Card>
  );
}

export default About;
