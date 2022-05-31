# SomaFM for Sonos

_Please contact daniel@saewitz.com with your feedback or [submit issues here](https://github.com/switz/somafm-sonos). It's greatly appreciated!_

_WARNING: You can only have one custom music service on Sonos per SID at a time.
         If you already have gone through this process for another service it will replace your existing custom service.
         If not, you're all good. Move ahead.
         You can change the SID to another number like 251 and it will work._
      

1. Open the Sonos client on your computer
2. Select Help > About My Sonos System
3. Find the IP address of your Sonos device in the list of the about
dialog
4. Open your browser of choice and navigate to the IP address and port
1400, with the filename of customsd.htm – for example, if your IP address is
10.10.10.10, navigate to http://10.10.10.10:1400/customsd.htm
5. Enter entries for the following fields and press submit:
   - SID: 253 (or 255)
   - Service Name: SomaFM
   - Endpoint URL: https://somafm-sonos.typetwo.space/main
   - Secure Endpoint URL: https://somafm-sonos.typetwo.space/main
   - Polling Interval: 60
   - Authentication SOAP header policy: Anonymous
   - Strings table: Version: 1, Uri: https://somafm-sonos.typetwo.space/static/strings.xml
   - Presentation Map: Version: 1, Uri: https://somafm-sonos.typetwo.space/static/presentationmap.xml
   - Container Type: Music Service
   - Capabilities:    
         [x] Playback duration logging at track end    
         [x] Playback event logging during track play    
         [x] Extended Metadata    
6. Upon success you should see the text "success!" displayed
7. Return to your Sonos client application
7a. Sonos may have automatically added the service.
    Check in your home menu if "Relisten" exists.
    If so, you can stop here and enjoy.
8. Select Manage > Service Settings...
9. Select Services, and click the Add button
10. Under available services, select "Relisten" and click Next
11. Select "Setup now" or whatever bullshit
12. You should see a confirmation
