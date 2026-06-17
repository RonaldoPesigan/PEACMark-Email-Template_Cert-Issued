<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your PEACMark is Now Live</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
      rel="stylesheet"
    />
    <style>
      html, body { margin: 0; padding: 0; background: #f5f3f3; }
      * { box-sizing: border-box; }
      a { color: #8b1a1f; }
      a:hover { text-decoration: none; }

      @media (max-width: 600px) {
        .email-header { padding: 16px 20px !important; }
        .email-header img:first-child { height: 38px !important; }
        .email-header img:last-child { height: 32px !important; }
        .email-body { padding: 16px !important; }
        .card-border { padding: 10px !important; }
        .card-inner { padding: 20px 16px 28px !important; }
        .card-eyebrow { font-size: 14px !important; }
        .card-h1 { font-size: 22px !important; margin-bottom: 16px !important; }
        .email-footer { padding: 20px 20px 24px !important; }
      }
    </style>
  </head>
  <body style="background: #f5f3f3;">
    <div style="max-width: 600px; margin: 0 auto; background: #f5f3f3;">

      <!-- ═══ HEADER ═══ -->
      <div
        class="email-header"
        style="
          background: #fff;
          padding: 24px 36px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #eae6e6;
        "
      >
        <img
          src="{{ asset('images/peac-logo.png') }}"
          alt="PEAC – Private Education Assistance Committee"
          style="height: 52px; width: auto; display: block"
        />
        <img
          src="{{ asset('images/certcheck-logo.png') }}"
          alt="CertCheck"
          style="height: 44px; width: auto; display: block"
        />
      </div>

      <!-- ═══ BODY AREA ═══ -->
      <div class="email-body" style="padding: 22px 28px 24px; background: #f5f3f3">
        <!-- Card with gradient border -->
        <div
          class="card-border"
          style="
            background: linear-gradient(180deg, #8b1a1f 0%, #c1272d 45%);
            border-radius: 12px;
            padding: 15px;
          "
        >
          <div
            class="card-inner"
            style="
              background: #fff;
              border-radius: 6px;
              padding: 30px 25px 100px;
              position: relative;
              overflow: hidden;
            "
          >
            <!-- Eyebrow -->
            <div
              class="card-eyebrow"
              style="
                font-family: 'Public Sans', sans-serif;
                font-size: 17px;
                font-weight: 700;
                color: #ad8424;
                margin-bottom: 8px;
                letter-spacing: 0.01em;
              "
            >
              Certification Issued
            </div>

            <!-- Headline -->
            <h1
              class="card-h1"
              style="
                margin: 0 0 22px;
                font-family: 'Public Sans', sans-serif;
                font-size: 27px;
                line-height: 1.16;
                font-weight: 800;
                color: #4a1416;
                letter-spacing: -0.02em;
              "
            >
              Congratulations — your PEACMark is <br />now live.
            </h1>

            <!-- Greeting -->
            <p
              style="
                font-family: 'Public Sans', sans-serif;
                font-size: 14.5px;
                line-height: 1.6;
                color: #2e2a2a;
                margin: 0 0 14px;
              "
            >
              Good day,
              <strong style="color: #1a1818; font-weight: 700">{{ $schoolName }}</strong>
            </p>

            <!-- Para 1 -->
            <p
              style="
                font-family: 'Public Sans', sans-serif;
                font-size: 14px;
                line-height: 1.65;
                color: #3c3838;
                margin: 0 0 14px;
              "
            >
              We are pleased to inform you that your school's certification
              status is now verifiable through the PEAC CertCheck facility.
            </p>

            <!-- Para 2 -->
            <p
              style="
                font-family: 'Public Sans', sans-serif;
                font-size: 14px;
                line-height: 1.65;
                color: #3c3838;
                margin: 0 0 16px;
              "
            >
              You may access CertCheck through
              <a href="{{ $certCheckUrl }}">{{ $certCheckUrl }}</a>, where you can also
              download your school's PEAC certification badge called PEACMark.
              Please refer to the attached Guidelines on the Use of the
              PEACMark for information on its proper use.
            </p>

            <!-- CTA 1: School access -->
            <div style="margin: 0 0 24px">
              <a
                href="{{ $certCheckUrl }}"
                style="
                  display: inline-block;
                  background: #8b1a1f;
                  color: #fff;
                  font-family: 'Public Sans', sans-serif;
                  font-size: 14px;
                  font-weight: 700;
                  text-decoration: none;
                  padding: 12px 28px;
                  border-radius: 7px;
                  letter-spacing: 0.01em;
                  white-space: nowrap;
                "
                >Access PEAC CertCheck &rarr;</a
              >
            </div>

            <!-- Para 3 -->
            <p
              style="
                font-family: 'Public Sans', sans-serif;
                font-size: 14px;
                line-height: 1.65;
                color: #3c3838;
                margin: 0 0 16px;
              "
            >
              The public may likewise verify your school's certification
              status by entering your DepEd School ID on the
              <a href="{{ $publicVerifyUrl }}">{{ $publicVerifyUrl }}</a>, or by scanning the QR
              Code embedded in the PEACMark.
            </p>

            <!-- CTA 2: Public access -->
            <div style="margin: 0 0 24px">
              <a
                href="{{ $publicVerifyUrl }}"
                style="
                  display: inline-block;
                  background: #fff;
                  color: #8b1a1f;
                  font-family: 'Public Sans', sans-serif;
                  font-size: 14px;
                  font-weight: 700;
                  text-decoration: none;
                  padding: 11px 24px;
                  border-radius: 7px;
                  border: 2px solid #8b1a1f;
                  letter-spacing: 0.01em;
                "
                >Verify School Certification &rarr;</a
              >
            </div>

            <!-- Para 4 -->
            <p
              style="
                font-family: 'Public Sans', sans-serif;
                font-size: 14px;
                line-height: 1.65;
                color: #3c3838;
                margin: 0;
              "
            >
              Thank you for pursuing PEAC certification and for your
              commitment to ensuring compliance with established quality
              standards in education.
            </p>
          </div>
        </div>
        <!-- /card -->
      </div>

      <!-- ═══ FOOTER ═══ -->
      <div
        class="email-footer"
        style="
          background: #fff;
          padding: 28px 36px 32px;
          text-align: center;
          border-top: 1px solid #eae6e6;
        "
      >
        <p
          style="
            font-family: 'Public Sans', sans-serif;
            font-size: 12px;
            color: #9a9494;
            line-height: 1.6;
            margin: 0 0 6px;
          "
        >
          25th Floor Philippine AXA Life Centre, 1286 Sen. Gil Puyat Avenue
          corner Tindalo St., <br />Makati City
        </p>
        <p
          style="
            font-family: 'Public Sans', sans-serif;
            font-size: 12px;
            color: #9a9494;
            margin: 0 0 20px;
          "
        >
          Don't like these emails?
          <a href="{{ $unsubscribeUrl }}" style="color: #9a9494">Unsubscribe.</a>
        </p>

        <!-- Social icons -->
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-bottom: 20px;
          "
        >
          <a
            href="{{ config('peac.facebook_url') }}"
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              width: 34px;
              height: 34px;
              border-radius: 50%;
              background: #3b5998;
              text-decoration: none;
            "
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="{{ config('peac.instagram_url') }}"
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              width: 34px;
              height: 34px;
              border-radius: 50%;
              background: #c13584;
              text-decoration: none;
            "
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none" />
            </svg>
          </a>
        </div>

        <!-- Copyright -->
        <p
          style="
            font-family: 'Public Sans', sans-serif;
            font-size: 12px;
            color: #9a9494;
            margin: 0 0 20px;
          "
        >
          &copy; {{ date('Y') }} PEAC - IMS. All rights reserved.
        </p>

        <!-- Powered by Rakso CT -->
        <div
          style="
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
          "
        >
          <span
            style="
              font-family: 'Public Sans', sans-serif;
              font-size: 10.5px;
              color: #b0aaaa;
              letter-spacing: 0.03em;
            "
            >Powered by Rakso CT</span
          >
          <img
            src="{{ asset('images/rakso-logo.png') }}"
            alt="Rakso CT – A Creative Technology Company"
            style="height: 36px; width: auto; display: block"
          />
        </div>
      </div>

    </div>
  </body>
</html>