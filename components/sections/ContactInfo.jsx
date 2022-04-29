import {useEffect, useRef} from 'react'
import { Loader } from '@googlemaps/js-api-loader'

import * as Text from '../Text'
import * as Input from '../Input'
import Container from '../Container'

import styles from '../../styles/components/sections/ContactInfo.module.scss'

export default function ContactInfo() {
  return (
    <div className={styles.ContactInfo}>
      <Container>
        <div className={styles.Grid}>
          <div className={styles.Map}>
            <GoogleMaps />
          </div>

          <div className={styles.Info}>
            <Input.Spacer />
            <Input.Spacer />

            <Text.Heading5>
              Address:
            </Text.Heading5>

            <Text.Paragraph>
              50 McIntosh Drive, Suite 106, Markham, ON, L3R 9T3
            </Text.Paragraph>
            
            <Input.Spacer />
            <Input.Spacer />

            <Text.Heading5>
              Telephone:
            </Text.Heading5>

            <Text.Paragraph>
              (905)213-5673
            </Text.Paragraph>
            
            <Input.Spacer />
            <Input.Spacer />

            <Text.Heading5>
              Email:
            </Text.Heading5>

            <Text.Paragraph>
              mammaritascucina@gmail.com
            </Text.Paragraph>

            <Input.Spacer />
            <Input.Spacer />

            <Text.Heading5>
              Hours:
            </Text.Heading5>

            <Text.Paragraph>
              11:30am - 7:00pm
            </Text.Paragraph>
          </div>
        </div>
      </Container>
    </div>
  )
}

function GoogleMaps() {
  const googlemap = useRef(null)

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GCP_API_KEY,
      version: 'weekly',
    })

    loader.load().then(() => {
      const google = window.google
      const map = new google.maps.Map(googlemap.current, {
        center: {lat: 43.8546336, lng: -79.3608378},
        zoom: 15,
      })
      const contentString =
        '<div id="infoWindowContent">' +
        '<h2>Mamma Rita&apos;s Cucina</h2>' +
        '<div id="bodyContent">' +
        "<p><b>50 McIntosh Drive</b>, Suite 106, Markham, ON, L3R 9T3" +
        "</p>" +
        "</div>" +
        "</div>"

      const infowindow = new google.maps.InfoWindow({
        content: contentString,
      })

      const marker = new google.maps.Marker({
        position: {lat: 43.8546336, lng: -79.3608378},
        map,
        title: "Mamma Rita's Cucina",
      })

      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        })
      })
    })
  })

  return (
    <div id="map" ref={googlemap} />
  )
}