import { Tile, Section, Box, Image, Heading } from "react-bulma-components"

export default function Heero() {
  return (
    <div id="grid">
      <div>
        <Tile>
          <Tile kind="parent">
            <Tile renderAs="article" kind="child" notification color="info">
              {/* <Heading>Product Photography</Heading> */}

              <Image
                size="3by3"
                src="https://images.pexels.com/photos/7704060/pexels-photo-7704060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <Heading subtitle>Product Photography</Heading>
            </Tile>
          </Tile>
        </Tile>
      </div>
      <div>
        <Tile>
          <Tile kind="parent">
            <Tile renderAs="article" kind="child" notification color="info">
              {/* <Heading>Product Photography</Heading> */}

              <Image
                size="3by3"
                src="https://images.pexels.com/photos/1200502/pexels-photo-1200502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <Heading subtitle>Product Photography</Heading>
            </Tile>
          </Tile>
        </Tile>
      </div>
      <style jsx>{`
        * {
          font-family: "Questrial", sans-serif;
        }

        #grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      `}</style>
    </div>
  )
}
