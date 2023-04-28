<script>
  // @ts-nocheck

  import Icon from "@iconify/svelte";
  //   let sate;
  //   let outputIrradiation;
  //   let generate;
  //   let plantSize;
  //   let benchmark;
  //   let outputSubsidy;
  //   let outputElectricityAnnual;
  //   let outputElectricityLifetime;
  //   let electricityCost;
  //   let outputSavingMonthly;
  //   let outputSavingAnnual;
  //   let outputSavingLifetime;
  //   let co2;
  //   let trees;
  //   let outputWithoutSubsidy;

  /**
   * @type {{ val: number; }}
   */
  import { calcOutput, crossOffOutput } from "../stores/calculation";
  //   calcOutput.subscribe(val => {
  //     output = val
  //   })
</script>

<div class="modal">
  <div class="flex flex-row w-full justify-between p-10">
    <h2>Recommended Options for you</h2>
    <button on:click={crossOffOutput}><Icon icon="iconoir:cancel" /></button>
  </div>

  <div class="grid grid-cols-3 p-10">
    <div class="col-span-1 flex flex-col">
      <h3>3kW</h3>
      <h3>5kW</h3>
      <h3>10kW</h3>
    </div>
    <div class="col-span-2 overflow-y-scroll flex flex-col px-10">
      <h1>Calculated Results</h1>
      <table>
        <tr>
          <td>Size of plant</td>
          <td>{$calcOutput.plantSize} Sq.m</td>
        </tr>
        <tr>
          <td>Cost of plant</td>
          <td>{$calcOutput.outputSubsidy} Rupees</td>
        </tr>
        <tr>
          <td>Eneregy generation by power plant </td>
          <td>{$calcOutput.generate}kW</td>
        </tr>
      </table>
    </div>
  </div>
</div>

<style>
  .modal {
    box-shadow: 0 0 100px rgba(0, 0, 0, 1);
    display: flex;
    flex-direction: column;
    border-radius: 1.5rem /* 24px */;
    height: 80vh;
    width: 80%;
    background-color: white;
    position: absolute;
    margin-top: 1.5rem;
  }
  h2 {
    color: black;
    font-weight: bold;
    font-size: 20px;
  }
  h3 {
    color: black;
    font-weight: bold;
    font-size: 15px;
    padding: 0.5rem;
  }
  h1 {
    color: black;
    font-weight: bolder;
    font-size: 25px;
    padding-bottom: 1rem;
  }
</style>
