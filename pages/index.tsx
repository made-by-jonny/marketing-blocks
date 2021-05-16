import Content from "../components/containers/content";
import PageContainer from "../components/containers/pageContainer";
import Container from "../components/containers/container";
import Button from "../components/primatives/form/button";
import Input from "../components/primatives/form/inputs";
import Grid from "../components/lists/grid";
import Row from "../components/row";
import Icon from "../components/icon";
import Image from "../components/primatives/image";
import LeadHeading from "../components/primatives/headings/lead";
import Mast from "../components/mast";

const Index = () => {
  return (
    <>
      <Mast>
        <a href="">logo</a>
        <Row as="nav" style={{ alignItems: "center" }}>
          <Grid max="repeat(5, 1fr)" style={{ textAlign: "center" }}>
            <li>About</li>
            <li>Features</li>
            <li>Work</li>
            <li>Pricing</li>
            <li>Contact</li>
          </Grid>
          <Button>Sign up</Button>
        </Row>
      </Mast>
      <PageContainer>
        <Container className="full" max="1fr 1fr">
          <>
            <Content>
              <h1>This is some example text</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
                voluptatibus nisi atque hic pariatur, optio necessitatibus
                dicta, reprehenderit fuga quo aperiam! Eligendi neque
                necessitatibus at? Repudiandae tenetur tempore dignissimos
                minus?
              </p>
              <form>
                <Row>
                  <Input label="Test label" />
                  <Button>Test Submit</Button>
                </Row>
              </form>
            </Content>
          </>
          <Content>
            <Image src="/header-img.png" style={{ maxHeight: "600px" }} />
          </Content>
        </Container>
        <Container>
          <h2>Some basic features</h2>
          <Grid max="repeat(2, 1fr)">
            {[...new Array(4)].map((item) => (
              <li>
                <Content>
                  <Container
                    max="80px 3fr"
                    min="80px 3fr"
                    as="section"
                    className="no-margin"
                  >
                    <Icon>
                      <i className="fa fa-home" aria-hidden="true" />
                    </Icon>
                    <section>
                      <h3>Test title 1</h3>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maxime voluptatibus nisi atque hic pariatur, optio
                        necessitatibus dicta, reprehenderit fuga quo aperiam!
                        Eligendi neque necessitatibus at? Repudiandae tenetur
                        tempore dignissimos minus?
                      </p>
                    </section>
                  </Container>
                </Content>
              </li>
            ))}
          </Grid>
        </Container>
        <Container className="full" max="1fr">
          <Content className="centered contained">
            <LeadHeading>Some text</LeadHeading>
            <h1>This is some example text</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              voluptatibus nisi atque hic pariatur, optio necessitatibus dicta,
              reprehenderit fuga quo aperiam! Eligendi neque necessitatibus at?
              Repudiandae tenetur tempore dignissimos minus?
            </p>
            <form>
              <Row>
                <Button>Test Submit</Button>
              </Row>
            </form>
          </Content>
        </Container>
        <Container>
          <h2 className="centered">Some basic features, but centered</h2>
          <Grid max="repeat(2, 1fr)">
            {[...new Array(4)].map((item) => (
              <li>
                <Content className="centered">
                  <Icon>
                    <i className="fa fa-home" aria-hidden="true" />
                  </Icon>
                  <h3>Test title 1</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maxime voluptatibus nisi atque hic pariatur, optio
                    necessitatibus dicta, reprehenderit fuga quo aperiam!
                    Eligendi neque necessitatibus at? Repudiandae tenetur
                    tempore dignissimos minus?
                  </p>
                </Content>
              </li>
            ))}
          </Grid>
        </Container>
      </PageContainer>
    </>
  );
};

export default Index;
