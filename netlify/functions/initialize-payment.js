<form onsubmit="submitOrder(event)">
  <div class="form-grid">
    <div class="field full">
      <label>Your name</label>
      <input id="customerName" name="customerName"
        required placeholder="Your name">
    </div>

    <div class="field">
      <label>Recipient number</label>
      <input id="recipientNumber" name="recipientNumber"
        required type="tel" placeholder="0241234567">
    </div>

    <div class="field">
      <label>Email</label>
      <input id="customerEmail" name="customerEmail"
        required type="email" placeholder="you@example.com">
    </div>

    <div class="field full">
      <label>Network</label>
      <select required id="recipientNetwork" name="recipientNetwork">
        <option value="">Select network</option>
        <option value="MTN">MTN</option>
        <option value="Telecel">Telecel</option>
        <option value="AirtelTigo">AirtelTigo</option>
      </select>
    </div>
  </div>

  <div class="notice">
    Never enter your MoMo PIN on this website.
  </div>

  <button type="submit" class="btn primary" style="width:100%">
    Pay with Mobile Money
  </button>
</form>
