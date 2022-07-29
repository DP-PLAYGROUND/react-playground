import { FunctionComponent, useCallback, useEffect } from "react";
import { SignatureSnapshot } from "../SignatureSnapshot";

export interface ActionsProps {
  readonly snapshot: SignatureSnapshot;
  readonly onUndoRedo?: (snapshot: SignatureSnapshot) => void;
  readonly onClear?: () => void;
}

export const Actions: FunctionComponent<ActionsProps> = ({
  snapshot,
  onUndoRedo: onApply,
  onClear,
}) => {
  const handleUndo = useCallback(
    () => snapshot.previous && onApply?.(snapshot.previous),
    [snapshot, onApply]
  );

  const handleRedo = useCallback(
    () => snapshot.next && onApply?.(snapshot.next),
    [snapshot, onApply]
  );

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.code !== "KeyZ" || !event.metaKey) {
        return;
      }

      return event.shiftKey ? handleRedo() : handleUndo();
    };
    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handleUndo, handleRedo]);

  return (
    <>
      <button disabled={!snapshot.previous} onClick={handleUndo}>
        Undo
      </button>
      <button disabled={!snapshot.next} onClick={handleRedo}>
        Redo
      </button>
      <button disabled={!snapshot.previous} onClick={onClear}>
        Clear
      </button>
    </>
  );
};
