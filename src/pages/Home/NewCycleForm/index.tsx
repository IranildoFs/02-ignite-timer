import { useFormContext } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

import { useContext } from "react";
import { CyclesContext } from "../../../context/cyclesContext";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      {" "}
      <label htmlFor="task">Voui trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestion"
        disabled={!!activeCycle}
        placeholder="Dê um nome para seu projeto"
        {...register("task")}
      />
      <datalist id="task-suggestion">
        <option>1</option>
        <option>2</option>
      </datalist>
      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        disabled={!!activeCycle}
        step={5}
        min={5}
        max={60}
        {...register("minutesAmount", { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  );
}
