import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import Spectacle CodeSlide add-on
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  logo: require("../assets/graphql-logo.svg"),
  graphiql: require("../assets/graphiql.png"),
  excitedBaby: require("../assets/ExcitedBaby.gif"),
  excitedAndy: require("../assets/ExcitedAndy.gif"),
  restVsGraphQL: require("../assets/rest-vs-graphql.png"),
  graphQLATT: require("../assets/graphql-all-the-things.jpg"),
  kyloApproves: require("../assets/KyloApproves.gif"),
  gorillaShark: require("../assets/gorilla_shark.jpg")
};

preloader(images);

const colors = {
  primary: "#E535AB",
  secondary: "black",
  tertiary: "white",
  quartenary: "white",
  hilightColor: "#E9D24D"
};
// TODO: Practice live coding demo

// TODO: DEPLOY

const fonts = {
  primary: "Roboto Condensed",
  secondary: "Ubuntu",
  tertiary: "monospace"
};

const theme = createTheme(colors, fonts);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        {/* Transitions slide, zoom, fade or spin */}
        <Deck transition={["zoom", "spin"]} transitionDuration={500}>
          <Slide bgColor="black">
            <Heading size={1} fit lineHeight={1.2} textColor={colors.primary}>
              GraphQL
            </Heading>
            <Heading size={1} fit caps>
              The Evolution of Data Fetching
            </Heading>
            <Image src={images.logo} margin="0px auto 40px" height="200px" />
          </Slide>

          <Slide>
            <Heading size={1}>The Origin Story</Heading>
            <List>
              <Appear><ListItem>Circa 2011</ListItem></Appear>
              <Appear><ListItem>Facebook's mobile app</ListItem></Appear>
              <Appear><ListItem>Came from web-centric background</ListItem></Appear>
              <Appear><ListItem>Mobile afterthought to Mobile first</ListItem></Appear>
              <Appear><ListItem>URL/HTML | Model/View</ListItem></Appear>
              <Appear><ListItem>API Versioning</ListItem></Appear>
              <Appear><ListItem>Newsfeed algorithm (growing complexity)</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="black" transition={["slide"]}>
            <BlockQuote>
              <Quote textSize="56px">When we built Facebook's mobile applications, we needed a data-fetching API powerful enough to describe all of Facebook, yet simple and easy to learn so product developers can focus on building things quickly</Quote>
              <Cite>Lee Byron</Cite>
            </BlockQuote>
            <Appear><Text textColor="white">260 Billion Requests served daily</Text></Appear>
            <Appear><Heading size={6} textColor={colors.hilightColor}>webscale</Heading></Appear>
          </Slide>

          <Slide transition={["slide", "fade"]}>
            <Heading size={1} lineHeight={1.3}>URL's | REST | SQL</Heading>
            <Appear><Text>These don't present data in the way we think</Text></Appear>
            <Appear>
              <List>
                <ListItem>Joining tables </ListItem>
                <ListItem>Primary/secondary keys</ListItem>
                <ListItem>Resource URL's</ListItem>
              </List>
            </Appear>
            <Appear><Text>How do we think?</Text></Appear>
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="black">
            <Heading fit caps lineHeight={1.1} textColor={colors.primary}>Graphs!</Heading>
            <Appear>
              <List textColor="white">
                <ListItem>Objects</ListItem>
                <ListItem>Properties</ListItem>
                <ListItem>Relationships</ListItem>
              </List>
            </Appear>
            <Appear><Text textColor={colors.hilightColor}>We think in terms of the models we use in our apps</Text></Appear>
          </Slide>

          <Slide bgImage={images.graphiql} bgDarken={0.30}>
            <Heading fit size={1}>GraphiQL</Heading>
          </Slide>

          <Slide transition={["slide", "fade"]}>
            <Heading>What is GraphQL?</Heading>
            <List>
              <Appear><ListItem>Data Query Language for Client Applications</ListItem></Appear>
              <Appear><ListItem>Defines a data shape</ListItem></Appear>
              <Appear><ListItem>Strongly typed</ListItem></Appear>
              <Appear><ListItem>Protocol</ListItem></Appear>
              <Appear><ListItem>Introspective</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading fit>
              Real World REST
            </Heading>
            <List>
              <Appear><ListItem>Overfetching</ListItem></Appear>
              <Appear><ListItem>Underfetching</ListItem></Appear>
              <Appear><ListItem>Multiple requests</ListItem></Appear>
              <Appear><ListItem>REST often grows into not REST (custom endpoints)</ListItem></Appear>
              <Appear><ListItem>REST is not a spec (what is it?)</ListItem></Appear>
            </List>
          </Slide>

          <Slide  transition={["slide", "fade"]} bgImage={images.restVsGraphQL} bgSize="contain" bgRepeat="no-repeat" bgDarken={0.05}  bgColor="#303030"/>

          <Slide bgColor="black" transition={["slide", "fade"]}>
            <BlockQuote>
              <Quote textSize="56px">Domain Driven Architecture</Quote>
              <Cite>David Nolen (Author of om)</Cite>
            </BlockQuote>
          </Slide>

          <Slide>
            <Heading size={2} caps lineHeight={1.0}>GraphQL Core Principles</Heading>
            <List>
              <ListItem><Appear><Text>Powerful Mental Model for Developers</Text></Appear></ListItem>
              <ListItem><Appear><Text>Type System</Text></Appear></ListItem>
              <ListItem><Appear><Text>Composition</Text></Appear></ListItem>
              <ListItem><Appear><Text>Backed by Arbritrary Code</Text></Appear></ListItem>
            </List>
          </Slide>

          <Slide bgColor="black">
            <Heading fit caps>Example</Heading>
            <Heading size={2} textColor={colors.primary}>All the things</Heading>
          </Slide>

          <Slide transition={["slide", "zoom"]}>
            <Heading size={5} lineHeight={2.0}>Hello World</Heading>
            <Layout>
              <Fill>
                <CodePane
                  textSize="18px"
                  lang="graphql"
                  source={require("raw!../code-examples/hello-world.graphql")}
                />
              </Fill>
              <Fill />
              <Appear>
                <Fill>
                  <CodePane
                    textSize="18px"
                    lang="json"
                    source={require("raw!../code-examples/hello-world.result")}
                  />
                </Fill>
              </Appear>
            </Layout>
          </Slide>

          <Slide transition={["slide", "zoom"]}>
            <Heading size={5} lineHeight={2.0}>Parameters</Heading>
            <Layout>
              <Fill />
              <Fit>
                <CodePane
                  textSize="20px"
                  lang="graphql"
                  source={require("raw!../code-examples/hello-world-parameter.graphql")}
                />
              </Fit>
              <Fill />
            </Layout>
          </Slide>

          <Slide transition={["slide", "zoom"]}>
            <Heading size={5} lineHeight={2.0}>Profile</Heading>
            <Layout>
              <Fill>
                <CodePane
                  textSize="18px"
                  lang="graphql"
                  source={require("raw!../code-examples/profile.graphql")}
                />
              </Fill>
              <Fill />
              <Appear>
                <Fill>
                  <CodePane
                    textSize="18px"
                    lang="json"
                    source={require("raw!../code-examples/profile.result")}
                  />
                </Fill>
              </Appear>
            </Layout>
          </Slide>

          <Slide transition={["slide", "zoom"]}>
            <Heading size={5} lineHeight={2.0}>Alias-ing</Heading>
            <Layout>
              <Fill>
                <CodePane
                  textSize="18px"
                  lang="graphql"
                  source={require("raw!../code-examples/alias.graphql")}
                />
              </Fill>
              <Fill />
              <Appear>
                <Fill>
                  <CodePane
                    textSize="18px"
                    lang="json"
                    source={require("raw!../code-examples/alias.result")}
                  />
                </Fill>
              </Appear>
            </Layout>
          </Slide>

          <Slide transition={["slide", "zoom"]}>
            <Heading size={5} lineHeight={2.0}>Nesting</Heading>
            <Layout>
              <Fill>
                <CodePane
                  textSize="18px"
                  lang="graphql"
                  source={require("raw!../code-examples/nested-friends.graphql")}
                />
              </Fill>
              <Fill />
              <Appear>
                <Fill>
                  <CodePane
                    textSize="18px"
                    lang="json"
                    source={require("raw!../code-examples/nested-friends.result")}
                  />
                </Fill>
              </Appear>
            </Layout>
          </Slide>

          <Slide transition={["slide", "zoom"]}>
            <Heading size={5} lineHeight={2.0}>More Nesting</Heading>
            <Layout>
              <Fill>
                <CodePane
                  textSize="18px"
                  lang="graphql"
                  source={require("raw!../code-examples/nested-friends-events.graphql")}
                />
              </Fill>
              <Fill />
              <Appear>
                <Fill>
                  <CodePane
                    textSize="18px"
                    lang="json"
                    source={require("raw!../code-examples/nested-friends-events.result")}
                  />
                </Fill>
              </Appear>
            </Layout>
          </Slide>

          <Slide transition={["slide", "zoom"]}>
            <Heading size={5}>Fragments</Heading>
            <Layout>
              <Fill />
              <Fit>
                <CodePane
                  textSize="20px"
                  lang="graphql"
                  source={require("raw!../code-examples/fragment.graphql")}
                />
              </Fit>
              <Fill />
            </Layout>
          </Slide>

          <Slide transition={["slide", "zoom"]}>
            <Heading size={5}>Query Variables</Heading>
            <Layout>
              <Fill />
              <Fit>
                <CodePane
                  textSize="20px"
                  lang="graphql"
                  source={require("raw!../code-examples/query-variables.graphql")}
                />
              </Fit>
              <Fill />
            </Layout>
          </Slide>

          <Slide transition={["slide", "zoom"]}>
            {/*<Heading size={5}>Declarative Expressive Power</Heading>*/}
            <Layout>
              <Fill />
              <Fit>
                <CodePane
                  textSize="15px"
                  lang="graphql"
                  source={require("raw!../code-examples/nested-friends-orderby.graphql")}
                />
              </Fit>
              <Fill />
            </Layout>
          </Slide>

          <Slide transition={["slide", "zoom"]}>
            <Heading size={5}>Mutations</Heading>
            <Layout>
              <Fill />
              <Fit>
                <CodePane
                  textSize="20px"
                  lang="graphql"
                  source={require("raw!../code-examples/mutation.graphql")}
                />
              </Fit>
              <Fill />
            </Layout>
          </Slide>

          <Slide bgColor="black">
            <Heading size={1}>GraphQL</Heading>
            <Heading size={2} textColor={colors.primary}>The Server Side</Heading>
          </Slide>

          <Slide>
            <Heading size={4} lineHeight={1.2}>What it does NOT do</Heading>
            <Appear><Text lineHeight={1.2}>It does NOT mandate a specific language-backend</Text></Appear>
            <Appear><Text>It is NOT a storage engine/language</Text></Appear>
          </Slide>

          <Slide>
            <Heading size={4}>What it does</Heading>
            <List>
              <Appear><ListItem>It is an application server that conforms to the GraphQL-spec</ListItem></Appear>
              <Appear><ListItem>Exposes a single endpoint</ListItem></Appear>
              <Appear><ListItem>Endpoint parses and executes a query</ListItem></Appear>
              <Appear><ListItem>Executes over a type system</ListItem></Appear>
              <Appear><ListItem>Type system available to clients via introspection</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={4}>GraphQL Server Structure</Heading>
            <List>
              <Appear><ListItem>GraphQL Core (per-language)</ListItem></Appear>
              <Appear><ListItem>Type Definitions</ListItem></Appear>
              <Appear><ListItem>Application Code (business logic)</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={4}>Type System</Heading>
            <List>
              <Appear><ListItem>API for Type Definitions</ListItem></Appear>
              <Appear><ListItem>Serves as a thin mapping layer that maps application-logic to GraphQL Type Domain</ListItem></Appear>
              <Appear><ListItem>Introspection [GraphQL API for Querying Types]</ListItem></Appear>
              <Appear><ListItem>Metadata [Documentation, Deprecation]</ListItem></Appear>
              <Appear><ListItem>Colocate documentation with the "mapping"</ListItem></Appear>
              <Appear><ListItem>Validation [Is a query valid within an app's schema?]</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["fade"]} bgColor="black">
            <Heading fit caps>Example</Heading>
            <Heading size={2} textColor={colors.primary}>All the things</Heading>
            <Appear>
              <Heading size={4} textColor={colors.hilightColor}>Round 2</Heading>
            </Appear>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../code-examples/hello-world.example")}
            ranges={[
              { loc: [0, 0], title: "hello-world" },
              { loc: [27, 30], note: "Define a Schema" },
              { loc: [13, 26], note: "Define a root query" },
              { loc: [14, 15], note: "Give it a name" },
              { loc: [15, 16], note: "Description for docs" },
              { loc: [17, 25], note: "Root query fields" },
              { loc: [18, 24], note: "me" },
              { loc: [19, 20], note: "Type to be returned from the query" },
              { loc: [20, 21], note: "Description for docs" },
              { loc: [21, 23], note: "Can return a promise or value" },
              { loc: [0, 12], note: "PersonType" }
            ]}
          />

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../code-examples/resolve.example")}
            ranges={[
              { loc: [0, 0], title: "resolve" },
              { loc: [0, 3], note: "Person" },
              { loc: [4, 18], note: "fields" },
              { loc: [5, 11], note: "Person.name" },
              { loc: [8, 10], note: "mapping first + last -> name" },
              { loc: [11, 17], note: "Person.profilePic" },
              { loc: [14, 16], note: "returns a promise which resolves to pic URL"}
            ]}
          />

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../code-examples/mutation.example")}
            ranges={[
              { loc: [0, 0], title: "mutations" },
              { loc: [44, 50], note: "How do we make this request?" },
              { loc: [38, 42], note: "Define a Schema" },
              { loc: [13, 16], note: "Root query" },
              { loc: [0, 12], note: "Person.name & Person.id" },
              { loc: [17, 37], note: "Mutation" },
              { loc: [18, 20], note: "name and description" },
              { loc: [20, 33], note: "Each field is a mutation" },
              { loc: [21, 22], note: "createPost mutation" },
              { loc: [22, 23], note: "This is the return type" },
              { loc: [23, 29], note: "arguments" },
              { loc: [29, 34], note: "resolve (it's just a function)" },
              { loc: [44, 50], note: "This works!" }
            ]}
          />

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../code-examples/context.example")}
            ranges={[
              { loc: [0, 0], title: "context", note: "Auth example" },
              { loc: [0, 4], note: "Application imports" },
              { loc: [5, 6], note: "Instantiate express app" },
              { loc: [7, 14], note: "Use express-session" },
              { loc: [15, 20], note: "Use express-graphql" },
              { loc: [16, 17], note: "Give it our GraphQL schema" },
              { loc: [17, 18], note: "We want to use GraphiQL!" },
              { loc: [18, 19], note: "Pass session into the context" },
              { loc: [21, 22], note: "Listen on port 80" },
              { loc: [23, 24], note: "Somewhere else..." },
              { loc: [25, 35], note: "sensitiveString" },
              { loc: [28, 34], note: "resolve takes in the context as a parameter" }
            ]}
          />

          <Slide bgImage={images.excitedAndy} bgDarken={0.10}>
            <Heading fit size={1}>Demo Time!</Heading>
            <Heading size={4} textColor={colors.primary}>[REST to GraphQL]</Heading>
          </Slide>

          <Slide bgImage={images.gorillaShark} bgSize="contain" bgRepeat="no-repeat" bgDarken={0.10} bgColor="#8ba1cb"/>

          <Slide>
            <Heading size={4}>How are we using GraphQL</Heading>
            <List>
              <Appear><ListItem>CQRS | Event Sourcing | Microservices</ListItem></Appear>
              <Appear><ListItem>API Gateway</ListItem></Appear>
              <Appear><ListItem>GraphQL speaks to all of our microservices</ListItem></Appear>
              <Appear><ListItem>All client queries go through GraphQL</ListItem></Appear>
              <Appear><ListItem>Create commands through GraphQL</ListItem></Appear>
              <Appear><ListItem>Documents/describes our API</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgImage={images.kyloApproves} bgSize="contain" bgRepeat="no-repeat" bgDarken={0.05} />

          <Slide>
            <Heading lineHeight={1.3}>Common Questions</Heading>
            <List>
              <Appear><ListItem><Text>Authentication</Text></ListItem></Appear>
              <Appear><ListItem><Text>Versioning</Text></ListItem></Appear>
              <Appear><ListItem><Text>Safeguarding Dangerous Queries</Text></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide", "fade"]}>
            <Heading>Language Libraries</Heading>
            <Layout>
              <Fill>
                <List>
                  <ListItem><Text><Link textColor={colors.hilightColor} target="_blank" href="https://github.com/chentsulin/awesome-graphql#lib-js">JavaScript</Link></Text></ListItem>
                  <ListItem><Text><Link textColor={colors.hilightColor} target="_blank" href="https://github.com/chentsulin/awesome-graphql#lib-rb">Ruby</Link></Text></ListItem>
                  <ListItem><Text><Link textColor={colors.hilightColor} target="_blank" href="https://github.com/chentsulin/awesome-graphql#lib-php">PHP</Link></Text></ListItem>
                  <ListItem><Text><Link textColor={colors.hilightColor} target="_blank" href="https://github.com/chentsulin/awesome-graphql#lib-py">Python</Link></Text></ListItem>
                  <ListItem><Text><Link textColor={colors.hilightColor} target="_blank" href="https://github.com/chentsulin/awesome-graphql#lib-java">Java</Link></Text></ListItem>
                  <ListItem><Text><Link textColor={colors.hilightColor} target="_blank" href="https://github.com/chentsulin/awesome-graphql#cc-libraries">C/C++</Link></Text></ListItem>
                  <ListItem><Text><Link textColor={colors.hilightColor} target="_blank" href="https://github.com/chentsulin/awesome-graphql#lib-go">Go</Link></Text></ListItem>
                </List>
              </Fill>
              <Fill>
                <List>
                  <ListItem><Text><Link textColor={colors.hilightColor} target="_blank" href="https://github.com/chentsulin/awesome-graphql#lib-scala">Scala</Link></Text></ListItem>
                  <ListItem><Text><Link textColor={colors.hilightColor} target="_blank" href="https://github.com/chentsulin/awesome-graphql#lib-dotnet">.NET</Link></Text></ListItem>
                  <ListItem><Text><Link textColor={colors.hilightColor} target="_blank" href="https://github.com/chentsulin/awesome-graphql#lib-elixir">Elixir</Link></Text></ListItem>
                  <ListItem><Text><Link textColor={colors.hilightColor} target="_blank" href="https://github.com/chentsulin/awesome-graphql#lib-haskell">Haskell</Link></Text></ListItem>
                  <ListItem><Text><Link textColor={colors.hilightColor} target="_blank" href="https://github.com/chentsulin/awesome-graphql#lib-sql">SQL</Link></Text></ListItem>
                  <ListItem><Text><Link textColor={colors.hilightColor} target="_blank" href="https://github.com/chentsulin/awesome-graphql#lib-lua">Lua</Link></Text></ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading>Further Resources</Heading>
            <List>
              <ListItem><Text><Link textColor={colors.hilightColor} target="_blank" href="https://github.com/facebook/graphql">facebook/graphql</Link> (GraphQL spec)</Text></ListItem>
              <ListItem><Text><Link textColor={colors.hilightColor} target="_blank" href="https://github.com/graphql/graphql-js">graphql/graphql-js</Link> (Reference js Implementation)</Text></ListItem>
              <ListItem><Text><Link textColor={colors.hilightColor} target="_blank" href="https://github.com/graphql/graphiql">graphql/graphiql</Link> (GUI IDE)</Text></ListItem>
              <ListItem><Text><Link textColor={colors.hilightColor} target="_blank" href="http://graphql.org/">graphql.org</Link></Text></ListItem>
              <ListItem><Text><Link textColor={colors.hilightColor} target="_blank" href="http://graphql.org/docs/getting-started/">docs</Link></Text></ListItem>
              <ListItem><Text><Link textColor={colors.hilightColor} target="_blank" href="https://graphql-slack.herokuapp.com/">graphql-slack</Link></Text></ListItem>
              <ListItem><Text><Link textColor={colors.hilightColor} target="_blank" href="https://github.com/chentsulin/awesome-graphql">awesome-graphql</Link> (awesome examples)</Text></ListItem>
            </List>
          </Slide>


          <Slide transition={["slide", "fade"]} bgImage={images.graphQLATT} bgSize="contain" bgRepeat="no-repeat" bgDarken={0.10} bgColor="white"/>

          <Slide>
            <Heading size={1} fit caps color="white">Thanks</Heading>
            <Heading size={6}>Handcoded with &lt;3 by Ben Diuguid</Heading>
            <br/>
            <Text lineHeight={1.3}>@BenDiuguid - All The Things</Text>
            <Text>
              <Link textColor={colors.hilightColor} target="_blank" href="https://github.com/BenDiuguid/">GitHub</Link> |
              <Link textColor={colors.hilightColor} target="_blank" href="https://twitter.com/BenDiuguid"> Twitter </Link> |
              <Link textColor={colors.hilightColor} target="_blank" href="https://medium.com/@BenDiuguid">Medium</Link>
            </Text>
            <br/>
            <Text lineHeight={1.6}>Any Questions?</Text>
            <Text>[Presentation made with <Link textColor={colors.hilightColor} target="_blank" href="https://github.com/FormidableLabs/spectacle">SpectacleJS</Link>]</Text>
            <Text><Link textColor={colors.hilightColor} target="_blank" href="https://bendiuguid.github.io/long-live-graphql">bendiuguid.github.io/long-live-graphql</Link></Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
