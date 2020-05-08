import React from "React"

const Timeline = () => {
  return (
    <>
      <center
        style={{
          paddingTop: `50px`,
          paddingBottom: `50px`,
        }}
      >
        <h3
          style={{
            fontFamily: `SF Pro Display SF Pro Display SF Pro Icons Helvetica NeueHelvetica Arial sans-serif`,
            fontWeight: `600`,
            fontWeight: `600`,
          }}
        >
          We provide year-long programming to ensure kids are engaged throughout
          the school year and summer
        </h3>
        <p>
          Serving 300 kids annually in Marin City and greater Southern Marin
        </p>

        <div
          style={{
            display: `flex`,
            justifyContent: `space-around`,
            maxWidth: 1000,
            backgroundColor: `#56368B`,
            color: `#fff`,
            marginTop: `50px`,
            marginBottom: `50px`,
          }}
        >
          <div>Aug</div>
          <div>Sep</div>
          <div>Oct</div>
          <div>Nov</div>
          <div>Dec</div>
          <div>Jan</div>
          <div>Feb</div>
          <div>Mar</div>
          <div>Apr</div>
          <div>May</div>
          <div>Jun</div>
          <div>Jul</div>
        </div>
        <div
          style={{
            display: `flex`,
            justifyContent: `space-between`,
            maxWidth: 1000,
            color: `#000`,
            paddingTop: `50px`,
            paddingBottom: `50px`,
          }}
        >
          <span
            style={{
              backgroundColor: `purple`,
              paddingLeft: `100px`,
              paddingRight: `120px`,
              position: `relative`,
              color: `#fff`,
            }}
          >
            Volley Ball
          </span>
          <span
            style={{
              backgroundColor: `green`,
              paddingLeft: `90px`,
              paddingRight: `140px`,
              position: `relative`,
              color: `#fff`,
              marginRight: `100px`,
            }}
          >
            Lacross
          </span>
        </div>
        <div
          style={{
            display: `flex`,
            maxWidth: 1000,
            marginLeft: `375px`,
            color: `#000`,
          }}
        >
          <span
            style={{
              backgroundColor: `orange`,
              color: `#fff`,
              marginLeft: `110px`,
              paddingRight: `75px`,
              paddingLeft: `200px`,
              textAlign: `center`,
            }}
          >
            Basketball
          </span>
          <span
            style={{
              backgroundColor: `pink`,
              color: `#fff`,
              paddingRight: `75px`,
              paddingLeft: `10px`,
              textAlign: `center`,
            }}
          >
            Track
          </span>
          <span
            style={{
              backgroundColor: `blue`,
              color: `#fff`,
              paddingRight: `10px`,
              paddingLeft: `100px`,
              textAlign: `center`,
            }}
          >
            Summer Camp
          </span>
        </div>
        <h3
          style={{
            fontFamily: `avenir`,
            color: `#4F4F4F`,
            fontSize: `20px`,
            fontFamily: `SF Pro Display SF Pro Display SF Pro Icons Helvetica NeueHelvetica Arial sans-serif`,
            fontWeight: `700`,
            paddingTop: `20px`,
          }}
        >
          Program Timeline
        </h3>
      </center>
    </>
  )
}

export default Timeline
