
/**
 * Configure your bot instance.
 * See our [API Documentation]{@link https://docs.regression.gg/studios/unity/unity-sdk/creating-bots/configuration} for available configuration options and values.
 */
 export function configureBot(rg) {

  rg.isSpawnable = true;
  rg.lifecycle = "MANAGED";
  rg.characterConfig = { 
      // fill in custom keys + values to help seat and spawn your bot
  };
}

/**
* Implement your code here to define a [PlayTest Bot]{@link https://docs.regression.gg/studios/unity/unity-sdk/creating-bots/playtest-bots}.
* This method is invoked once each time your Unity integration collects updated state information for your GameObjects.
* Add your code here to make dynamic decisions based on the current game state.
* 
* Note: processTick and startScenario are mutually exclusive
* 
* @param rg Exposes the [Regression Games API]{@link https://docs.regression.gg/studios/unity/unity-sdk/creating-bots/configuration} which contains methods for evaluating the game state and queueing behaviors that you've defined as `RGActions`.
*/
export async function processTick(rg) {

  console.log("Tick #: ", rg.getState().tick);
  console.log("Scene Name: ", rg.getState().sceneName);
  console.log("Entities in state: ", Object.keys(rg.getState().gameState).length);
}

/**
* Implement your code here to define a [Validation Bot]{@link https://docs.regression.gg/studios/unity/unity-sdk/creating-bots/validation-bots}.
* This method is invoked once and runs to completion. The scenario will fail if any assertion fails.
* Add your code here to perform step-by-step actions and validate their effects on other GameObjects the game state.
*
* Note: processTick and startScenario are mutually exclusive
*  
* @param rg Exposes the [Regression Games API]{@link https://docs.regression.gg/studios/unity/unity-sdk/creating-bots/configuration} which contains methods for evaluating the game state and queueing behaviors that you've defined as `RGActions`.
*/
// export async function startScenario(rg) {

// }






// import { CharInfo } from "../bossroom";

// let CURRENT_ABILITY = 0;
// let lastEnemyId = -1;
// let charType;

// export function configureBot(rg) {
//   rg.characterConfig = {
//     characterType: CharInfo.type[Math.round(Math.random() * 1000000) % 4]
//   };
// }

// export async function processTick(rg) {

//   // The character type we request may not be the one we actually get
//   const characterType = rg.characterConfig.characterType;
//   if (characterType) {
//     const newCharType = CharInfo.type.indexOf(characterType);
//     if (charType != newCharType) {
//       charType = newCharType;
//       console.log(`Character type has been set: ${characterType}`);
//     }
//     // do not log if already the same
//   }

//   if (rg.getState().sceneName === "BossRoom") {

//     // select 1 ability per update
//     await selectAbility(rg);

//     // TODO: Add script sensors to the door and button so that a bot can walk to a button if door not open
//   }
// }

// /**
//  * Selects an ability for this character, and queues that action.
//  */
// async function selectAbility(rg) {

//   // Select an ability
//   const abilities = CharInfo.abilities[charType];
//   const abilityIndex = CURRENT_ABILITY % abilities.length;
//   const ability = abilities[abilityIndex];

//   if(!rg.entityHasAttribute(rg.getBot(), ["isOnCooldown", `ability${ability + 1}Available`], true)) {
//     return;
//   }

//   const targetType = CharInfo.abilityTargets[charType][abilityIndex]
//   let currentTarget;

//   if(targetType === -1) 
//   {
//     currentTarget = null;
//   } 
//   else if (targetType === 1) {
//     // The ability requires an enemy.
    
//     currentTarget = await rg.getState(lastEnemyId);
//     if(!currentTarget) {
//       // If there was no recent enemy id, or if it's no longer available in the state then find the nearest enemy instead
//       currentTarget = await rg.findNearestEntity(null, null, (entity) => { return entity.team === 1 && !entity.broken } )
//       if(!currentTarget) {
//         lastEnemyId = -1;
//         return;
//       }
//       lastEnemyId = currentTarget.id;
//     }
//   } else {
//     // Otherwise, this ability requires an ally - select the closest one
//     currentTarget = await rg.findNearestEntity(null, null, (entity) => { return entity.team === 0 });
//     if(!currentTarget) {
//       return;
//     }
//   }
  
//   rg.performAction("PerformSkill", {
//     skillId: ability,
//     targetId: currentTarget?.id,
//     xPosition: currentTarget?.position?.x,
//     yPosition: currentTarget?.position?.y,
//     zPosition: currentTarget?.position?.z
//   });

//   CURRENT_ABILITY++;

// }
