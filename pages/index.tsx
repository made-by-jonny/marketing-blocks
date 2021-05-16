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
import Card from "../components/cards/card";
import Column from "../components/column";
import Avatar from "../components/avatar";
import Detail from "../components/detail";

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
        <Container max="1fr">
          <Content className="centered contained">
            <LeadHeading>Some text</LeadHeading>
            <h2>This is some example text</h2>
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
        <Container className="full" max="1fr">
          <Content className="centered">
            <h2>Pricing</h2>
            <p>Find what plan is best for you</p>
            <Grid max="repeat(3, 1fr)">
              <Card as="li">
                <Content style={{ padding: "1rem", textAlign: "left" }}>
                  <LeadHeading>Starter</LeadHeading>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maxime voluptatibus nisi atque hic pariatur,
                  </p>
                  <ul>
                    <li>
                      <i className="fa fa-check" aria-hidden="true"></i>check
                      feature 1
                    </li>
                    <li>
                      <i className="fa fa-check" aria-hidden="true"></i>check
                      feature 2
                    </li>
                    <li>
                      <i className="fa fa-check" aria-hidden="true"></i>check
                      feature 3
                    </li>
                    <li>
                      <i className="fa fa-check" aria-hidden="true"></i>check
                      feature 4
                    </li>
                  </ul>
                  <div className="with-padding">
                    <span className="large">£20</span>
                    <span>/ Per Month</span>
                  </div>
                  <Button>Choose Plan</Button>
                  <Content className="centered with-padding">
                    <a href="">Learn more</a>
                  </Content>
                </Content>
              </Card>
              <Card as="li">
                <Content style={{ padding: "1rem", textAlign: "left" }}>
                  <LeadHeading>Starter</LeadHeading>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maxime voluptatibus nisi atque hic pariatur,
                  </p>
                  <ul>
                    <li>
                      <i className="fa fa-check" aria-hidden="true"></i>check
                      feature 1
                    </li>
                    <li>
                      <i className="fa fa-check" aria-hidden="true"></i>check
                      feature 2
                    </li>
                    <li>
                      <i className="fa fa-check" aria-hidden="true"></i>check
                      feature 3
                    </li>
                    <li>
                      <i className="fa fa-check" aria-hidden="true"></i>check
                      feature 4
                    </li>
                  </ul>
                  <div className="with-padding">
                    <span className="large">£20</span>
                    <span>/ Per Month</span>
                  </div>
                  <Button>Choose Plan</Button>
                  <Content className="centered with-padding">
                    <a href="">Learn more</a>
                  </Content>
                </Content>
              </Card>
              <Card as="li">
                <Content style={{ padding: "1rem", textAlign: "left" }}>
                  <LeadHeading>Starter</LeadHeading>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maxime voluptatibus nisi atque hic pariatur,
                  </p>
                  <ul>
                    <li>
                      <i className="fa fa-check" aria-hidden="true"></i>check
                      feature 1
                    </li>
                    <li>
                      <i className="fa fa-check" aria-hidden="true"></i>check
                      feature 2
                    </li>
                    <li>
                      <i className="fa fa-check" aria-hidden="true"></i>check
                      feature 3
                    </li>
                    <li>
                      <i className="fa fa-check" aria-hidden="true"></i>check
                      feature 4
                    </li>
                  </ul>
                  <div className="with-padding">
                    <span className="large">£20</span>
                    <span>/ Per Month</span>
                  </div>
                  <Button>Choose Plan</Button>
                  <Content className="centered with-padding">
                    <a href="">Learn more</a>
                  </Content>
                </Content>
              </Card>
            </Grid>
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
        <Container max="1fr">
          <Content className="centered">
            <h2>Latest news</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <Grid max="repeat(2, 1fr)">
              {[...new Array(4)].map((item) => (
                <Card>
                  <img
                    width="100%"
                    height="auto"
                    style={{
                      background: "#EFF2F6",
                      minHeight: "200px",
                      border: "0",
                    }}
                  />
                  <Content style={{ padding: "1rem" }}>
                    <h3>This is a title of a blog</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Accusamus, error similique! Delectus inventore ratione
                      dolorum tenetur porro praesentium nulla sit alias, labore
                      repudiandae omnis qui recusandae, illum sapiente unde
                      sunt.
                    </p>
                    <Container
                      className="no-margin"
                      max="2fr 1fr"
                      min="2fr 1fr"
                    >
                      <Row>
                        <Avatar />
                        <Column>
                          <strong>Anthony Totton</strong>
                          <Detail>4 days ago</Detail>
                        </Column>
                      </Row>
                      <Row justify="flex-end">
                        <Detail>
                          <i className="fa fa-heart" aria-hidden="true"></i> 120
                        </Detail>
                        <Detail>
                          <i className="fa fa-comment" aria-hidden="true"></i>{" "}
                          63
                        </Detail>
                      </Row>
                    </Container>
                  </Content>
                </Card>
              ))}
            </Grid>
          </Content>
        </Container>
      </PageContainer>
    </>
  );
};

export default Index;
