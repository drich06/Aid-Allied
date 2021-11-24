import React, {useState} from 'react'
import {Button, StyleSheet, Text, View, Image, SafeAreaView, Pressable, Linking, ScrollView, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const LoadingScreen = ({ navigation })=> {
  return (
    <View style={{flex:1}}>
      <ImageBackground source={require('./assets/upsplash.png')} resizeMode="cover" style={{height: '100%',
      width: '100%'}}>
      <View style={styles.buttonWrapper}>
          <View style={styles.lgsWrapper}>
            <Button
            title= "Let's Get Started "
            fontWeight = 'bold'
            fontSize = '20'
            marginBottom = '5'
            onPress={() => navigation.navigate('HomeScreen')} color= '#37383b'
            />
          </View>
          </View>
      </ImageBackground>

    </View>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/bghome.png')} resizeMode="cover" style={styles.homeDrawer} imageStyle= 
        {{opacity:1}}>
      
        <View style={styles.homescreenbutton}>
        
          <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.squaref}></View>
                <Button onPress={() => navigation.navigate('FirstAid')} title="First Aid Tips" color="red" />
              </View>
            <View style={styles.circular}></View>
            
          </View>
        

           <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.squarec}></View>
                <Text style={styles.itemText}></Text>
                <Button onPress={() => navigation.navigate('Covid')} title="Covid Preventions" color="green" />
              </View>
            <View style={styles.circularg}></View>
          </View>

          <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.squared}></View>
                <Text style={styles.itemText}></Text>
                <Button onPress={() => navigation.navigate('Disaster')} title="Disaster" color="black" />
              </View>
            <View style={styles.circularb}></View>
          </View>
          
          <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={{width: 20,
                  height: 20,
                  backgroundColor: 'blue',
                  opacity: .8,
                  borderRadius: 6,
                  marginRight: 15,}}></View>
                <Text style={styles.itemText}></Text>
                <Button onPress={() => navigation.navigate('About')} title="About" color="blue" />
              </View>
            <View style={styles.circularbl}></View>
          </View>


        </View>
      </ImageBackground>
      

    </View>

     
  );
}

const Earthquake = ({ navigation }) => {
 return(
  <View style={styles.container1}>
    <ScrollView >
     <Image style={styles.disaster}
      source={require('./assets/earthquake.jpg')}
     />
      
      <View style={styles.title}>
        <Image
          style={styles.disasterIcon}
          source={require('./assets/eBefore.png')}
          />
        <Text style={ styles.titleText}>BEFORE</Text>

      </View>
        
      <View>
        <Text style={styles.infos}>
        • Secure heavy furniture and appliances
        {'\n'}
        <Text style={styles.description}> - Large, heavy, or unstable items should be placed on 
                                          low shelves, close to the floor, and away from 
                                          doors and escape routes.
                                          {'\n\n'}</Text>
        • Identify safe spots 
        {'\n'}
        <Text style={styles.description}> - Know where you can take cover in every room, 
                                          for example under a sturdy table or desk. {'\n\n'}</Text>
        • Have a plan
        {'\n'}
        <Text style={styles.description}> - Make sure everyone in your household knows how to access disaster supplies, 
                                          and whom to call and where to meet if an earthquake 
                                          strikes when you are apart. {'\n\n'}</Text>
        • Gather supplies
        {'\n'}
        <Text style={styles.description}> -Have ample water and an emergency kit ready in your home, as well as smaller go-bags 
                                          in your car, workplace, and any other places you might be when an earthquake hits.{'\n\n'}</Text>
        </Text>
      </View>

      <View style={styles.title}>
        <Image
          style={styles.disasterIcon}
          source={require('./assets/eDuring.png')}
          />
        <Text style={ styles.titleText}>DURING</Text>

      </View>

      <View>
        <Text style={styles.infos}>
        • Indoors 
        {'\n'}
        <Text style={styles.description}> - Get under a desk or table, cover your head and neck with one arm 
                                            or hand, and use your other arm or hand to hang on (drop, cover, and hold on). 
                                          {'\n\n'}</Text>
        • Outdoors
        {'\n'}
        <Text style={styles.description}> - Quickly find an open space away from buildings, power lines, and anything else 
                                           that can topple on you.  {'\n\n'}</Text>
        
        </Text>
      </View>

      <View style={styles.title}>
        <Image
          style={styles.disasterIcon}
          source={require('./assets/eAfter.png')}
          />
        <Text style={ styles.titleText}>AFTER</Text>
        
      </View>

      <View>
        <Text style={styles.infos}>
        • Conduct a safety check
        {'\n'}
        <Text style={styles.description}> - Once you are in a safe place, check yourself and others for injuries, 
                                            and call for help if needed. Look around to make sure you are not in 
                                            danger from other hazards caused by the quake, such as gas leaks or fire. 
                                          {'\n\n'}</Text>
        • Get help, if needed
        {'\n'}
        <Text style={styles.description}> - If you are trapped, cover your mouth, nose, and eyes against dust. Send a text 
                                            and make noise to alert rescuers to your location. {'\n\n'}</Text>
        • Be prepared for aftershocks 
        {'\n'}
        <Text style={styles.description}> -  Aftershocks can be as strong as the original quake. {'\n\n'}</Text>
        • Stay connected
        {'\n'}
        <Text style={styles.description}> -If you have access to a battery-operated radio (perhaps in your car) or television, 
                                                update yourself on the latest emergency information.{'\n\n'}</Text>
        </Text>
      </View>


   </ScrollView>
  </View>
   
 )
}
const About =({ navigation }) =>{
 return(
  <View style={styles.container}>
    <ImageBackground style={{flex: 1,
                      width: '100%',
                      height: '100%'}} 
                      resizeMode="cover"
                      source={require('./assets/about.png')}>
      
    </ImageBackground>
  
  </View>
  
 )
}

const Typhoon = ({navigation}) =>{
  return(
<SafeAreaView style={styles.container1}>
    <ScrollView >
     <Image style={styles.disaster}
      source={require('./assets/typhoon.png')}
     />
      
      <View style={styles.title}>
        <Image
          style={styles.disasterIcon}
          source={require('./assets/tBefore.png')}
          />
        <Text style={ styles.titleText}>BEFORE</Text>

      </View>
        
      <View>
        <Text style={styles.infos}>
        • Check the news.
        {'\n'}
        • Inspect the house and perform repairs if needed.
        {'\n'}
        • Have some ready-to-eat food and water set aside.
        {'\n'}
        • Prepare an emergency kit.
        {'\n'}
        • Stay alert for evacuation orders. Designate a safe spot
        for your family to hole up in after evacuation.
        {'\n'}
        </Text>
      </View>

      <View style={styles.title}>
        <Image
          style={styles.disasterIcon}
          source={require('./assets/tDuring.png')}
          />
        <Text style={ styles.titleText}>DURING</Text>

      </View>

      <View>
        <Text style={styles.infos}>
        • Cancel any scheduled travels.
        {'\n'}
        • Save your phone battery for emergencies.
        {'\n'}
        • Disconnect appliances or switch off the main source of electricity.
        {'\n'}
        • Avoid going to flooded areas. Wear protective gears such as raincoats and boots.
        {'\n'}
        • Comply with announcements and advisories from the local government.
        {'\n'}
        </Text>
      </View>

      <View style={styles.title}>
        <Image
          style={styles.disasterIcon}
          source={require('./assets/tAfter.png')}
          />
        <Text style={ styles.titleText}>AFTER</Text>
        
      </View>

      <View>
        <Text style={styles.infos}>
        • Continue monitoring weather updates. Inspect your house for any signs of damage.
        {'\n'}
        • If your house was destroyed, ensure safety before entering it.
        {'\n'}
        • Protect yourself against mosquito and water-borne diseases
        {'\n'}
        • Boil water for at least 20 minutes before drinking to make sure it isn't contaminated.
        {'\n'}
        </Text>
      </View>


   </ScrollView>
  </SafeAreaView>
  )
}

const Fire= ({navigation}) =>{
  return(
<SafeAreaView style={styles.container1}>
    <ScrollView >
     <Image style={styles.disaster}
      source={require('./assets/fire.jpg')}
     />
      
      <View style={styles.title}>
        <Image
          style={styles.disasterIcon}
          source={require('./assets/fBefore.png')}
          />
        <Text style={ styles.titleText}>BEFORE</Text>

      </View>
        
      <View>
        <Text style={styles.infos}>
        • Have an emergency fire plan in place, including a warning/communication system to alert employees of a fire, 
        designated evacuation routes, periodic evacuation drills, extinguisher usage training, and prevention controls.
        {'\n'}
        • Inspect your facility for fire hazards. Conduct a walk-through inspection, or ask your local fire department to do so. Correct discovered hazards.
        {'\n'}
        • Consider installing a building sprinkler system. If a sprinkler system is already in place, inspect and test it on a regular basis.
        {'\n'}
        • Provide the appropriate number and type of fire extinguishers, and train employees how to use them. Provide periodic refresher training.
        {'\n'}
        </Text>
      </View>

      <View style={styles.title}>
        <Image
          style={styles.disasterIcon}
          source={require('./assets/fDuring.png')}
          />
        <Text style={ styles.titleText}>DURING</Text>

      </View>

      <View>
        <Text style={styles.infos}>
        • Immediately contact the fire department
        {'\n'}
        • Follow your emergency fire plan and evacuate the building. Account for all employees, visitors, and customers.
        {'\n'}
        • If the fire is small, allow trained employees to extinguish the fire. Follow the fire department's instructions upon arrival.
        {'\n'}
        </Text>
      </View>

      <View style={styles.title}>
        <Image
          style={styles.disasterIcon}
          source={require('./assets/fAfter.png')}
          />
        <Text style={ styles.titleText}>AFTER</Text>
        
      </View>

      <View>
        <Text style={styles.infos}>
        • Contact your insurance company
        {'\n'}
        • Take steps to prevent additional loss
        {'\n'}
        • Keep employees informed on repair and start-up plans
        {'\n'}
        </Text>
      </View>


   </ScrollView>
  </SafeAreaView>
  )
}

const Tsunami = ({navigation})=> {
  return(
<SafeAreaView style={styles.container1}>
    <ScrollView >
     <Image style={styles.disaster}
      source={require('./assets/tsunami.jpg')}
     />
      
      <View style={styles.title}>
        <Image
          style={styles.disasterIcon}
          source={require('./assets/tsBefore.png')}
          />
        <Text style={ styles.titleText}>BEFORE</Text>

      </View>
        
      <View>
        <Text style={styles.infos}>
        • Establish whether your home and other places you frequent are in tsunami hazard areas.
        {'\n'}
        • Know how high above sea level your street is and how far it is from the coast.
        {'\n'}
        • Cobble together an emergency supplies kit.
        {'\n'}
        • Plan your escape and evacuation routes.
        {'\n'}
        </Text>
      </View>

      <View style={styles.title}>
        <Image
          style={styles.disasterIcon}
          source={require('./assets/tsDuring.png')}
          />
        <Text style={ styles.titleText}>DURING</Text>

      </View>

      <View>
        <Text style={styles.infos}>
        • If there's an earthquake while you are on the coast and indoors, drop, cover and hold on. If you're outside, stay away from falling objects.
        {'\n'}
        • When the shaking is over, move quickly to inland, higher ground. Go on foot if you can. 
        {'\n'}
        • Bring your animals if you evacuate. Bring your preparedness kit.
        {'\n'}
        </Text>
      </View>

      <View style={styles.title}>
        <Image
          style={styles.disasterIcon}
          source={require('./assets/tsAfter.png')}
          />
        <Text style={ styles.titleText}>AFTER</Text>
        
      </View>

      <View>
        <Text style={styles.infos}>
        • Tell family and friends you're OK.
        {'\n'}
        • Keep tuned in to official information sources or local media.
        {'\n'}
        • Don't assume the danger is over after the first wave. The next one might be bigger.
        {'\n'}
        </Text>
      </View>


   </ScrollView>
  </SafeAreaView>
  )
}

const VolcanicEruption = ({navigation}) =>{
  return(
<SafeAreaView style={styles.container1}>
    <ScrollView >
     <Image style={styles.disaster}
      source={require('./assets/volcanicEruption.jpg')}
     />
      
      <View style={styles.title}>
        <Image
          style={styles.disasterIcon}
          source={require('./assets/vBefore.png')}
          />
        <Text style={ styles.titleText}>BEFORE</Text>

      </View>
        
      <View>
        <Text style={styles.infos}>
        • Evacuate immediately if you live or are staying within the radius of affected areas.
        {'\n'}
        • Stay tuned to national news and your local community’s channels to be on top of the situation and stay informed with local safety plans and evacuation areas.
        {'\n'}
        • Charge your electronics.
        {'\n'}
        • Know disaster hotlines and other emergency hotlines.
        {'\n'}
        </Text>
      </View>

      <View style={styles.title}>
        <Image
          style={styles.disasterIcon}
          source={require('./assets/vDuring.png')}
          />
        <Text style={ styles.titleText}>DURING</Text>

      </View>

      <View>
        <Text style={styles.infos}>
        • Use an N95 dust mask to protect yourself from pulmo-respiratory injuries and diseases. 
        {'\n'}
        • Protect your skin and eyes with proper clothing and glasses or goggles. Ashfall is sharp and abrasive, so don’t rub if any comes into contact with your skin or eyes. 
        {'\n'}
        • Secure your pets inside your home. Fine, volcanic ash is harmful for them too.
        {'\n'}
        </Text>
      </View>

      <View style={styles.title}>
        <Image
          style={styles.disasterIcon}
          source={require('./assets/vAfter.png')}
          />
        <Text style={ styles.titleText}>AFTER</Text>
        
      </View>

      <View>
        <Text style={styles.infos}>
        • Do not leave your home or indoor shelters until notified by the local government that it is safe to do so.
        {'\n'}
        • Wear protection. Use masks, glasses/goggles, long sleeves, pants, and shoes when clearing out ash to protect your lungs, skin and eyes.
        {'\n'}
        • Clean your gutters and roof with water after clearing out the ash to prevent corrosion.
        {'\n'}
        </Text>
      </View>


   </ScrollView>
  </SafeAreaView>
  )
}


const Disaster = ({navigation}) => {
  return(
    <View style={{flex:1}}>
        <View style={{
              flex: 1,
              flexDirection:'row',
              alignItems:'center',
              }}>
          <Pressable 
            onPress= {() => navigation.navigate('Earthquake')}
          >
            <Image 
              style={styles.disasterIconSize}
              source={require('./assets/equakeIcon.png')}
            />
          </Pressable>

          <Pressable onPress= {() => navigation.navigate('Typhoon')}>
            <Image 
              style={styles.disasterIconSize}
              source={require('./assets/typhoonIcon.png')}
            />
          </Pressable>
        </View>

        <View style={{
          flex: 1,
          flexDirection:'row',
          alignItems:'center',
          }}>
            <Pressable 
              onPress= {() => navigation.navigate('Fire')}>
              <Image 
                style={styles.disasterIconSize}
                source={require('./assets/fireIcon.png')}
              />
          </Pressable>

          <Pressable onPress= {() => navigation.navigate('Tsunami')}>
            <Image 
              style={styles.disasterIconSize}
              source={require('./assets/tsunamiIcon.png')}
            />
          </Pressable>
        </View>


        <View style={{
          flex: 1,
          flexDirection:'row',
          alignItems:'center',
          justifyContent: 'center'
          }}>
          <Pressable 
              onPress= {() => navigation.navigate('Volcanic Eruption')}>
              <Image 
                style={styles.disasterIconSize}
                source={require('./assets/eruptionIcon.png')}
              />
          </Pressable>
        </View>
      </View>
  )
}

const FirstAid =({navigation})=>{
  return(
    <ScrollView>
      <View style={{flex:1}}>
        <View style={{
              flex: 1,
              flexDirection:'row',
              alignItems:'center',
              }}>
          <Pressable onPress= {() =>navigation.navigate('CPR')} style={styles.disasterIcons}>
            <Image 
            style={styles.disasterIconSize}
            source={require('./assets/cpr.png')}
            />
          </Pressable>
        </View>
        <View style={{
              flex: 1,
              flexDirection:'row',
              alignItems:'center',
              }}>
          <Pressable onPress= {() =>navigation.navigate('Blood')} style={styles.disasterIcons}>
            <Image 
            style={styles.disasterIconSize}
            source={require('./assets/blood.png')}
            />
          </Pressable>
        </View>
        <View style={{
              flex: 1,
              flexDirection:'row',
              alignItems:'center',
              }}>
          <Pressable onPress= {() =>navigation.navigate('CPR')} style={styles.disasterIcons}>
              <Image 
              style={styles.disasterIconSize}
              source={require('./assets/choking.png')}
              />
          </Pressable>
        </View>
        <View style={{
              flex: 1,
              flexDirection:'row',
              alignItems:'center',
              }}>
          <Pressable onPress= {() =>navigation.navigate('Burns')} style={styles.disasterIcons}>
              <Image 
              style={styles.disasterIconSize}
              source={require('./assets/burns.png')}
              />
          </Pressable>
        </View>
        <View style={{
              flex: 1,
              flexDirection:'row',
              alignItems:'center',
              }}>
          <Pressable onPress= {() =>navigation.navigate('Fracture')} style={styles.disasterIcons}>
            <Image 
            style={styles.disasterIconSize}
            source={require('./assets/fracture.png')}
            />
          </Pressable>
        </View>
        <View style={{
              flex: 1,
              flexDirection:'row',
              alignItems:'center',
              }}>
          <Pressable onPress= {() =>navigation.navigate('Sprain')} style={styles.disasterIcons}>
              <Image 
              style={styles.disasterIconSize}
              source={require('./assets/sprains.png')}
              />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}
const Covid= ({navigation})=>{
  return(
    <View style={{flex:1}}>
      <View style={{
              flex: 1,
              flexDirection:'row',
              alignItems:'center',
              }}>
        <Pressable onPress= {() =>navigation.navigate('Prevention')} style={styles.disasterIcons}>
          <Image 
            style={styles.disasterIconSize}
            source={require('./assets/prevention.png')}
          />
        </Pressable>
      </View>
      <View style={{
              flex: 1,
              flexDirection:'row',
              alignItems:'center',
              }}>
        <Pressable onPress= {() =>navigation.navigate('Masks')} style={styles.disasterIcons}>
          <Image 
            style={styles.disasterIconSize}
            source={require('./assets/masks.png')}
          />
          </Pressable>
      </View>
      <View style={{
              flex: 1,
              flexDirection:'row',
              alignItems:'center',
              }}>
        <Pressable onPress= {() =>navigation.navigate('Tips')} style={styles.disasterIcons}>
          <Image 
            style={styles.disasterIconSize}
            source={require('./assets/tips_tricks.png')}
          />
        </Pressable>
      </View>     
    </View>
  )
}

const CPR= ({navigation}) => {
  const [shouldShow, setshouldShow] = useState(false);
  return (
    <View style={styles.container1}>
      <ScrollView>
        <ImageBackground source={require('./assets/bgfirstaid.png')} resizeMode="cover" style={styles.homeDrawer}>
        <View style={styles.buttonWrapper}>
            <Button
            title= "CPR (Cardiopulmonary Resuscitation)"
            fontWeight = 'bold'
            fontSize = '20'
            onPress={() => setshouldShow(!shouldShow)} color= 'black'
            />
              <Image 
              style={styles.disasterIconSize1}
              source={require('./assets/cpr.png')}
              />
              {
                shouldShow ? (
                  <Text>{'\n'}
                    First Aid for Suspected Cardiac Arrest{'\n'}
                    {'\n'}
                    When you suspect someone is in cardiac arrest:{'\n'}
                    1   Get someone to call 911 or the medical alert system for your location.{'\n'}
                    2   Start chest compressions immediately. Push down hard and fast in the center of the chest, allowing the chest to come back up naturally between compressions. Continue until someone with more training has arrived.{'\n'}
                    3   If you're trained in CPR, use chest compressions and rescue breathing.{'\n'}
                    4   Use an AED if one is available. It's important to not delay chest compressions, though, so have someone else find one while you do chest compressions.{'\n'}
                  </Text>
                ): null
              }
          </View>
            
        </ImageBackground>
      </ScrollView>
    </View>
  )
}

const Blood= ({navigation}) => {
  const [shouldShow, setshouldShow] = useState(false);
  return (
    <View style={styles.container1}>
      <ScrollView>
        <ImageBackground source={require('./assets/bgfirstaid.png')} resizeMode="cover" style={styles.homeDrawer}>
        <View style={styles.buttonWrapper}>
            <Button
            title= "Bleeding"
            fontWeight = 'bold'
            fontSize = '20'
            onPress={() => setshouldShow(!shouldShow)} color= 'black'
            />
            <Image 
            style={styles.disasterIconSize1}
            source={require('./assets/blood.png')}
            />
              {
                shouldShow ? (
                  <Text>{'\n'}
                    First Aid for Bleeding{'\n'}
                      {'\n'}
                      If you're faced with bleeding{'\n'}
                      1   Rinse the wound with water if possible.{'\n'}
                      2   Cover the wound with a gauze or cloth (towel, blanket, clothing, whatever's available).{'\n'}
                      3   Apply direct pressure to stop the blood flow and encourage clotting.{'\n'}
                      4   If possible, elevate the bleeding body part above the heart.{'\n'}
                      5   Don't remove the cloth if it becomes soaked through, but add more layers if needed. Removing the first layer will interfere with the clotting process and result in more blood loss.{'\n'}
                      6   Once bleeding is stopped, apply a clean bandage.
                  </Text>
                ): null
              }
          </View>
            
        </ImageBackground>
      </ScrollView>
    </View>
  )
}

const Choking= ({navigation}) => {
  const [shouldShow, setshouldShow] = useState(false);
  return (
    <View style={styles.container1}>
      <ScrollView>
        <ImageBackground source={require('./assets/bgfirstaid.png')} resizeMode="cover" style={styles.homeDrawer}>
        <View style={styles.buttonWrapper}>
            <Button
            title= "Choking"
            fontWeight = 'bold'
            fontSize = '20'
            onPress={() => setshouldShow(!shouldShow)} color= 'black'
            />
            <Image 
            style={styles.disasterIconSize1}
            source={require('./assets/choking.png')}
            />
              {
                shouldShow ? (
                  <Text styles={styles.content}>{'\n'}
                      First Aid for Choking{'\n'}
                      {'\n'}
                      1   Stand behind the person and lean them slightly forward{'\n'}
                      2   Put your arms around their waist{'\n'}
                      3   Clench a fist and place it between their navel and rib cage{'\n'}
                      4   Grab your fist with your other hand{'\n'}
                      5   Pull the clenched fist sharply backward and upward under their rib cage in 5 quick thrusts. Repeat until the object is coughed up.{'\n'}
                      6   For someone who's obese or pregnant, perform thrusts around the chest instead of the abdomen.
                    </Text>
                ): null
              }
          </View>
            
        </ImageBackground>
      </ScrollView>
    </View>
  )
}

const Burns= ({navigation}) => {
  const [shouldShow, setshouldShow] = useState(false);
  return (
    <View style={styles.container1}>
      <ScrollView>
        <ImageBackground source={require('./assets/bgfirstaid.png')} resizeMode="cover" style={styles.homeDrawer}>
        <View style={styles.buttonWrapper}>
            <Button
            title= "Burns"
            fontWeight = 'bold'
            fontSize = '20'
            onPress={() => setshouldShow(!shouldShow)} color= 'black'
            />
            <Image 
            style={styles.disasterIconSize1}
            source={require('./assets/burns.png')}
            />
              {
                shouldShow ? (
                  <Text styles={styles.content}>{'\n'}
                      First Aid for Burns{'\n'}
                      {'\n'}
                      1   Flush the burned area with cool running water for several minutes. Do not use ice.{'\n'}
                      2   Apply a light gauze bandage.{'\n'}
                      3   Take ibuprofen or acetaminophen for pain relief if necessary.{'\n'}
                      4   Do not break any blisters that may have formed.{'\n'}
                      5   Do not apply ointments, butter, or oily remedies to a burn.
                  </Text>
                ): null
              }





          </View>
            
        </ImageBackground>
      </ScrollView>
    </View>
  )
}

const Fracture= ({navigation}) => {
  const [shouldShow, setshouldShow] = useState(false);
  return (
    <View style={styles.container1}>
      <ScrollView>
        <ImageBackground source={require('./assets/bgfirstaid.png')} resizeMode="cover" style={styles.homeDrawer}>
        <View style={styles.buttonWrapper}>
            <Button
            title= "Fracture"
            fontWeight = 'bold'
            fontSize = '20'
            onPress={() => setshouldShow(!shouldShow)} color= 'black'
            />
            <Image 
            style={styles.disasterIconSize1}
            source={require('./assets/fracture.png')}
            />
              {
                shouldShow ? (
                  <Text styles={styles.content}>{'\n'}
                      First Aid for Suspected Fracture{'\n'}
                      {'\n'}
                      1   Don't try to straighten it.
                      2   For a limb, use a splint and padding to immobilize it.{'\n'}
                      3   Put a cold pack on the injury, with a barrier between it and the skin to prevent tissue damage. If ice is all that's available, put it in a plastic bag and wrap it in a shirt or towel.{'\n'}
                      4   If it's an extremity, elevate it.{'\n'}
                      5   Give anti-inflammatory drugs like Advil (ibuprofen) or Aleve (naproxen) for pain.
                  </Text>
                ): null
              }             
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  )
}

const Sprain= ({navigation}) => {
  const [shouldShow, setshouldShow] = useState(false);
  return (
    <View style={styles.container1}>
      <ScrollView>
        <ImageBackground source={require('./assets/bgfirstaid.png')} resizeMode="cover" style={styles.homeDrawer}>
        <View style={styles.buttonWrapper}>
            <Button
            title= "Sprain"
            fontWeight = 'bold'
            fontSize = '20'
            onPress={() => setshouldShow(!shouldShow)} color= 'black'
            />
            <Image 
            style={styles.disasterIconSize1}
            source={require('./assets/sprains.png')}
            />
              {
                shouldShow ? (
                  <Text styles={styles.content}>{'\n'}
                  Immobilize the limb{'\n'}
                  {'\n'}
                  1    Apply a cold pack
                  2    Elevate the injured part if you can do so safely{'\n'}
                  3    Use NSAIDs for pain{'\n'}
                  4    See your healthcare provider soon for further diagnosis and treatment.{'\n'}
                </Text>
                ): null
              }




              
          </View>
            
        </ImageBackground>
      </ScrollView>
    </View>
  )
}

const Prevention= ({navigation}) => {
  const [shouldShow, setshouldShow] = useState(false);
  return (
    <View style={styles.container1}>
      <ScrollView>
        <ImageBackground source={require('./assets/bgfirstaid.png')} resizeMode="cover" style={styles.homeDrawer}>
        <View style={styles.buttonWrapper}>
            <Button
            title= "Prevention"
            fontWeight = 'bold'
            fontSize = '20'
            onPress={() => setshouldShow(!shouldShow)} color= 'black'
            />
            <Image 
            style={styles.disasterIconSize1}
            source={require('./assets/prevention.png')}
            />
              {
                shouldShow ? (
                  <Text styles={styles.content}>{'\n'}
                    To prevent the spread of COVID-19:{'\n'}
                    {'\n'}
                    Maintain a safe distance from others (at least 1 metre), even if they don’t appear to be sick.{'\n'}
                    Wear a mask in public, especially indoors or when physical distancing is not possible.{'\n'}
                    Choose open, well-ventilated spaces over closed ones. Open a window if indoors.{'\n'}
                    Clean your hands often. Use soap and water, or an alcohol-based hand rub.{'\n'}
                    Get vaccinated when it’s your turn. Follow local guidance about vaccination.{'\n'}
                    Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.{'\n'}
                    Stay home if you feel unwell.
                  </Text>
                ): null
              } 
          </View>    
        </ImageBackground>
      </ScrollView>
    </View>
  )
}

const Masks= ({navigation}) => {
  const [shouldShow, setshouldShow] = useState(false);
  return (
    <View style={styles.container1}>
      <ScrollView>
        <ImageBackground source={require('./assets/bgfirstaid.png')} resizeMode="cover" style={styles.homeDrawer}>
        <View style={styles.buttonWrapper}>
            <Button
            title= "Masks"
            fontWeight = 'bold'
            fontSize = '20'
            onPress={() => setshouldShow(!shouldShow)} color= 'black'
            />
            <Image 
            style={styles.disasterIconSize1}
            source={require('./assets/masks.png')}
            />
              {
                shouldShow ? (
                  <Text styles={styles.content}>{'\n'}
                  Properly fitted masks can help prevent the spread of the virus from the person wearing the mask to others. Masks alone do not protect against COVID-19, and should be combined with physical distancing and hand hygiene. Follow the advice provided by your local health authority.
                </Text>
                ): null
              }
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  )
}

const Tips= ({navigation}) => {
  const [shouldShow, setshouldShow] = useState(false);
  return (
    <View style={styles.container1}>
      <ScrollView>
        <ImageBackground source={require('./assets/bgfirstaid.png')} resizeMode="cover" style={styles.homeDrawer}>
        <View style={styles.buttonWrapper}>
            <Button
            title= "Tips"
            fontWeight = 'bold'
            fontSize = '20'
            onPress={() => setshouldShow(!shouldShow)} color= 'black'
            />
            <Image 
            style={styles.disasterIconSize1}
            source={require('./assets/tips_tricks.png')}
            />
              {
                shouldShow ? (
                  <Text styles={styles.content}>{'\n'}
                  Get Vaccinated{'\n'}
                  Wear a mask{'\n'}
                  Stay 6 feet away from others{'\n'}
                  Avoid crowds and poorly ventilated spaces{'\n'}
                  Wash your hands often{'\n'}
                  Monitor your health daily
                </Text>
                ): null
              }




              
          </View>
            
        </ImageBackground>
      </ScrollView>
    </View>
  )
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AID ALLIED"
          component={LoadingScreen}
          options={{ title: 'AID ALLIED' }}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Disaster" component={Disaster} />
        <Stack.Screen name="Earthquake" component={Earthquake} />
        <Stack.Screen name="Typhoon" component={Typhoon} />
        <Stack.Screen name="Fire" component={Fire} />
        <Stack.Screen name="Tsunami" component={Tsunami} />
        <Stack.Screen name="Volcanic Eruption" component={VolcanicEruption} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="FirstAid" component={FirstAid} />
        <Stack.Screen name="Covid" component={Covid} />
        <Stack.Screen name="CPR" component={CPR} />
        <Stack.Screen name="Blood" component={Blood} />
        <Stack.Screen name="Choking" component={Choking} />
        <Stack.Screen name="Burns" component={Burns} />
        <Stack.Screen name="Fracture" component={Fracture} />
        <Stack.Screen name="Sprain" component={Sprain} />
        <Stack.Screen name="Prevention" component={Prevention} />
        <Stack.Screen name="Masks" component={Masks} />
        <Stack.Screen name="Tips" component={Tips} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    color: '#e8e8e8'
  },
  container1:{
    flex: 1,
    alignItems: 'center',
    color: '#e8e6e1'
  },
  about: {
    alignItems: 'center',
    width: 250,
    height: 250
  },
  text: {
    marginTop:20,
    alignItems: 'flex-start',
    fontFamily: "Times New Roman",
    fontSize: 35,
    fontWeight: 'bold'

  },
  text1: {
    marginTop:10,
    alignItems: 'flex-start',
    fontFamily: "Times New Roman",
    fontSize: 24,
    fontWeight: 'bold'
  },
  aboutUsText:{
    margin: 10,
    padding: 10,
    numberOfLines: 3,
    fontSize: 16,
    textAlign: 'justify',
    backgroundColor: '#d6d2d2',
    borderRadius: 8,
    fontFamily: "Arial",
    letterSpacing: 1,
    lineHeight: 23,
    fontStyle: 'italic',
  },
  icons:{
    width: 30,
    height: 30,
  },
  contactText:{
    fontFamily: "Arial",
    fontSize: 14,
    color: '#2e2c2c'
  },
  disaster:{
    width: 414,
    height: 225,
  },
  disasterText:{
    fontSize: 25,
    fontFamily: 'Arial',
    fontWeight: 'Bold',
    textAlign: 'center'
  },
  disasterIcon:{
    width: 40,
    height: 40,
  },
  infos:{
    marginLeft: 50,
    fontSize: 15,
    fontFamily: 'Tahoma',
    letterSpacing: 1,
    lineHeight: 23,
    marginRight: 40,
    marginBottom: 10
  },
  description: {
    marginLeft: 30,
    fontSize: 14,
    fontFamily: 'Tahoma',
    letterSpacing: 1,
    lineHeight: 23,
    
  },
  title:{
    flex: 1,
    padding: 8,
    flexDirection:'row',
    alignItems:'center',
    marginTop: 20,
    marginLeft: 20
  },
  titleText:{
    fontSize: 23,
    fontFamily: 'Tahoma',
    marginLeft: 15,
    fontWeight: 'bold'
  },
  disasterIcons:{
    flex: 1,  
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#efefef'
  },
  disasterIconSize:{
    width: 180,
    height: 180,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal:10,
    marginVertical:20,
    alignItems: 'center'
  },
  disasterIconSize1:{
    width: 180,
    height: 180,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal:110,
    marginVertical:20,
    alignItems: 'center'
  },
  buttonWrapper: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 50,
    justifyContent: 'center',
  },
  content: {
    paddingTop: 7,
    paddingHorizontal: 90,
    justifyContent: 'center',
  },
  homescreenbutton: {
    paddingTop: 7,
    paddingHorizontal: 50,
    justifyContent: 'center',
    marginTop: 200
  },
  lgsWrapper: {
    paddingTop: 500,
    paddingHorizontal: 80,

  },
  circularg: {
    width: 12,
    height: 12,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 5,
  },
  circularb: {
    width: 12,
    height: 12,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
  },
  circularbl: {
    width: 12,
    height: 12,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 5,
  },
  homeDrawer: {
    height: '100%',
    width: '100%'
    
  },
  taskWrapper: {
    paddingTop: 0,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 120,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
},
itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
},
squaref: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    opacity: .8,
    borderRadius: 6,
    marginRight: 15,
},
squarec: {
  width: 20,
  height: 20,
  backgroundColor: 'green',
  opacity: .8,
  borderRadius: 6,
  marginRight: 15,
},
squared: {
  width: 20,
  height: 20,
  backgroundColor: 'black',
  opacity: .8,
  borderRadius: 6,
  marginRight: 15,
},
itemText: {
  maxWidth: '80%',
  fontWeight: 'bold',
  color: 'black',
},
})