import {
  Approval as ApprovalEvent,
  LogRebase as LogRebaseEvent,
  MinterAdded as MinterAddedEvent,
  MinterRemoved as MinterRemovedEvent,
  OwnershipRenounced as OwnershipRenouncedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent
} from "../generated/Titano/Titano"
import {
  Approval,
  LogRebase,
  MinterAdded,
  MinterRemoved,
  OwnershipRenounced,
  OwnershipTransferred,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleLogRebase(event: LogRebaseEvent): void {
  let entity = new LogRebase(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.epoch = event.params.epoch
  entity.totalSupply = event.params.totalSupply
  entity.save()
}

export function handleMinterAdded(event: MinterAddedEvent): void {
  let entity = new MinterAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.save()
}

export function handleMinterRemoved(event: MinterRemovedEvent): void {
  let entity = new MinterRemoved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.save()
}

export function handleOwnershipRenounced(event: OwnershipRenouncedEvent): void {
  let entity = new OwnershipRenounced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}
